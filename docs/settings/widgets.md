---
sidebar_position: 2
---

# Widgets

Create and manage multiple delivery date widgets. Use preset widget templates or customize them how you like. Widgets are designed in html and support liquid syntax along with additionally provided liquid variables and filters.

## Supported liquid

- [General liquid](https://shopify.dev/docs/api/liquid/tags)

:::caution

Not all Shopify tags, filter, and objects are available. Contact support at [edgeless.apps@gmail.com](mailto:edgeless.apps@gmail.com) for a specify use case you would like to achieve.

:::

## Shopify objects

### localization <code>object</code>

- https://shopify.dev/docs/api/liquid/objects/localization

### customer <code>object</code>

- https://shopify.dev/docs/api/liquid/objects/customer

### cart <code>object</code>

- https://shopify.dev/docs/api/liquid/objects/cart

### product <code>object</code>

- https://shopify.dev/docs/api/liquid/objects/product

## App objects

### rates <code>array</code>

Shipping rates in with flat transit time

#### Properties

- name: <code>string</code>
- price: <code>number</code>
- transit_time <code>object</code>
  - min: <code>number</code>
  - max: <code>number</code>
- estimated_delivery_time <code>object</code>
  - min: <code>string</code> - timestamp
  - max: <code>string</code> - timestamp
- consolidated_estimated_delivery_time <code>string</code>

#### Example usage

<!-- prettier-ignore -->
```html
{% for rate in rates %}
<div>
  <p>
    <strong>{{rate.name}}</strong>
    <span>
      {% if rate.price == 0 %}
        FREE
      {% else %}
        ${{rate.price}}
      {% endif %}
    </span>
  </p>
  <p>
    <span>Delivery</span>
    <span>
      {% if rate.consolidated_estimated_delivery_time != nil %}
        {{rate.consolidated_estimated_delivery_time}}
      {% else %}
        {{rate.transit_time.min}} to {{rate.transit_time.max}} business days {%
      endif %}
    </span>
  </p>
</div>
{% endfor %}
```

### shop <code>object</code>

#### Properties

- order_cutoff_time: <code>string</code> - timestamp
- estimated_shipping_time: <code>string</code> - timestamp

#### Example usage

<!-- prettier-ignore -->
```html
{% if shop.order_cutoff_time != nil %}
<div>
  <span>Order by</span>
  {% assign cutoff_day = shop.order_cutoff_time | date: '%Y/%m/%d' %}
  {% assign today = now | date: '%Y/%m/%d' %}
  <strong>{{shop.order_cutoff_time | date: '%l:%M %p'}}</strong>
  {% if cutoff_day != today %}
    <span>{{shop.order_cutoff_time | date: '%A, %B %e'}}</span>
  {% endif %}
</div>
{% endif %}
```

### widget <code>object</code>

#### Properties

- type: <code>string</code> - any string can be be set to differentiate widget placement or purpose.
- payload: <code>object</code> - any json data can be added for advanced use cases.

#### Example usage

<!-- prettier-ignore -->
```html
{% case widget.type %}
  {% when 'product' %}
    <div>
      Custom product page data: {{widget.payload.very.custom.product_page.data}}
    </div>
  {% when 'collection' %}
    <div>
      Custom collection page data:
      {{widget.payload.very.custom.collection_page.data}}
    </div>
{% endcase %}
```

## App global properties

#### Properties

- now <code>string</code> - timestamp updates each render ie. variant selection
- today <code>string</code> - alias for _now_
- tomorrow <code>string</code> - timestamp updates each render ie. variant selection
- frozen_now <code>string</code> - timestamp does not update after page load

## App tags

### countdown

Provides context to create a countdown timer

#### countdown tag parameters

- event: <code>string</code>
- freeze: <code>boolean</code>

#### countdown tag context data

- days: <code>number</code>
- hours: <code>number</code>
- minutes: <code>number</code>
- seconds: <code>number</code>

#### Example usage

<!-- prettier-ignore -->
```html
{% countdown event: shop.order_cutoff_time, freeze: true %}
<p>
  Order within
  <strong>
    <span>{{days | pluralize_with_empty: ' day', ' days'}}</span>
    <span>{{hours | pluralize_with_empty: ' hour', ' hours'}}</span>
    <span>{{minutes | pluralize: ' min', ' mins'}}</span>
    <span>{{seconds | pluralize: ' sec', ' secs'}}</span>
  </strong>
</p>
{% endcountdown %}
```

## App filters

### consolidated_date

Converts <code>rate.estimated_delivery_time</code> min and max timestamps into a consolidated date range with a date format.

This filter accepts the same parameters as Ruby's strftime method for formatting the date. For a list of shorthand formats, refer to the [Ruby documentation](https://ruby-doc.org/core-3.1.1/Time.html#method-i-strftime) or [strftime reference and sandbox](https://www.strfti.me/).

#### Example usage

<!-- prettier-ignore -->
```html
<div>
  <span>Delivery</span>
  <strong>
    {{rate.estimated_delivery_time | consolidated_date: '%b %d'}}
  </strong>
</div>
```

### countdown

Creates a countdown timer in a basic format ie.

<!-- prettier-ignore -->
```html
{{days | pluralize_with_empty: ' day', ' days'}} {{hours | pluralize_with_empty: ' hour', ' hours'}} {{minutes | pluralize: ' min', ' mins'}}
```

#### countdown filter parameters

- freeze: <code>boolean</code>

#### Example usage

<!-- prettier-ignore -->
```html
<p>
  Order within
  <strong> {{shop.order_cutoff_time | countdown }} </strong>
</p>
```

<!-- prettier-ignore -->
```html
<p>
  Order within
  <strong> {{shop.order_cutoff_time | countdown: freeze: true }} </strong>
</p>
```

### pluralize

Given a number, outputs number with a singular or plural string appended.

#### pluralize filter parameters

- singlar/plural tuple <code>array</code>

#### Example usage

<!-- prettier-ignore -->
```html
<p>{{rate.transit_time.min | pluralize ' day', ' days'}}</p>
```

### pluralize_with_empty

Given a number, outputs number with a singular or plural string appended. Outputs blank if given _zero_.

#### pluralize_with_empty filter parameters

- singlar/plural tuple <code>array</code>

#### Example usage

<!-- prettier-ignore -->
```html
<p>{{rate.transit_time.min | pluralize_with_empty ' day', ' days'}}</p>
```

## Shopify references

- [Shopify liquid reference](https://shopify.dev/docs/api/liquid)
