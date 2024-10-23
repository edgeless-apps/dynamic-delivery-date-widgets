---
sidebar_position: 2
---

# Vintage

Install on your store theme by inserting code snippet.

:::caution

This guide might not be consistent with your theme. Contact support at [edgeless.apps@gmail.com](mailto:edgeless.apps@gmail.com) for installation help.

:::

## App embed

In your theme editor, enable the app embed. This adds Javascript to your theme that powers your widgets.

![App embed](./img/app-embed.png)

## Code snippet

In your code editor, create new snippet named <code>dynamic-delivery-date-widget</code>. Copy and paste the following

<!-- prettier-ignore -->
```html
{% comment %}
  Renders a Dynamic Delivery Date widget component

  Accepts:
  - id: {String} ID for the widget. Generally, app block id is used here. Default: empty (optional)
  - current_product: {Object} Product Liquid object.
  - default_variant_id: {String} Default variant ID to apply to widget. Generally, used on cart page to show widget for a line item. Default: empty (optional)
    - Widget uses product.selected_or_first_available_variant if not provided.
  - target_selector: {String} Target CSS selector to watch variant selection changes - usually the variant id form input Default: empty (optional)
  - disable_global_style: {Boolean} Render widget with CSS encapsulation. Default: false (optional)
  - widget_type: {String} Dynamic "widget.type" value to pass to widget liquid template to customize template for different environments. Default: 'product' (optional)
  - widget_payload: {String} Dynamic "widget.payload" json payload value to pass to widget liquid template to customize template for any custom use case. Default: 'null' (optional)

  Usage:
  {%- assign current_product = product -%}
  {%- assign default_variant_id = product.selected_variant.id -%}
  {%- assign target_selector = 'form[action*="/cart/add"] input[name="id"]' -%}
  {%- assign disable_global_style = false -%}
  {%- assign widget_type = 'product' -%}
  {%- capture widget_payload -%}
  {
    "shop": {{ shop | json }}
  }
  {%- endcapture -%}
  {% render 'dynamic-delivery-date-widget', id: current_product.id, current_product: current_product, default_variant_id: default_variant_id target_selector: target_selector, disable_global_style: disable_global_style, widget_type: widget_type, widget_payload: widget_payload %}
{% endcomment %}
<dynamic-delivery-date-widget
  data-id="{{id | default: ''}}"
  data-target="{{target_selector | default: '' | escape}}"
  data-type="{{widget_type | default: 'product'}}"
  {% if disable_global_style %}data-disable-global-style{% endif %}
  role="status"
>
  <script data-id="widget_context" type="application/json">
  {
    "product": {{current_product | json}},
    {%- liquid
      if default_variant_id != blank
        assign selected_variant_id = default_variant_id
      else
        assign selected_variant_id = current_product.selected_variant.id
      endif
    -%}
    "selected_variant_id": {{ selected_variant_id | default: "null" }},
    {%- assign product_collection_ids = current_product.collections | map: 'id' -%}
    "product_collection_ids": {{product_collection_ids | json}}
  }
  </script>
  <template data-id="widget_payload" data-type="application/json">
  {{widget_payload | default: 'null' | escape}}
  </template>
</dynamic-delivery-date-widget>
```

## Render code snippet on product page

In your code editor, go to sections and open the <code>product-template</code> section.

Under product price, copy and paste the following

<!-- prettier-ignore -->
```html
<!-- BEGIN Dynamic Delivery Date - product widget -->
{%- assign current_product = product -%}
{%- assign default_variant_id = product.selected_variant.id -%}
{%- assign target_selector = 'form[action*="/cart/add"] [name="id"]' -%}
{%- assign disable_global_style = false -%}
{% render 'dynamic-delivery-date-widget', id: current_product.id, current_product: current_product, default_variant_id: default_variant_id, target_selector: target_selector, disable_global_style: disable_global_style %}
<script>
  document.addEventListener("DOMContentLoaded", function () {
    // patch - dispatch target selector's change event for vintage theme
    const changePatchSelector = "[data-section-type=product]";
    document
      .querySelector(changePatchSelector)
      .addEventListener("change", function () {
        document
          .querySelector('{{target_selector}}')
          .dispatchEvent(new Event("change"));
      });
  });
</script>
<!-- BEGIN Dynamic Delivery Date - product widget -->
```

For paste location reference:

<code>product-template</code>
![Vintage render snippet](./img/vintage-render-snippet.png)

## Shopify references

- [Customizing vintage themes](https://help.shopify.com/en/manual/online-store/themes/themes-by-shopify/vintage-themes/customizing-vintage-themes)
- [Theme architecture versions](https://help.shopify.com/en/manual/online-store/themes/managing-themes/versions)
- [Extend your theme with apps](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps)
- [Snippets](https://shopify.dev/docs/storefronts/themes/architecture#snippets)
- [Render liquid tag](https://shopify.dev/docs/api/liquid/tags/render)
