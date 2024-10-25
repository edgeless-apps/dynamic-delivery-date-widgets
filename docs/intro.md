---
sidebar_position: 1
---

# Intro

**[Dynamic Delivery Date](https://apps.shopify.com/)** is a **shopify app** that allows you to display **estimated delivery dates** and **shipping rates** on your **Shopify storefront**.

## Getting Started

After installing the app, go through each setting to setup all the features.

- [Basic settings](/docs/category/basic-settings)

Once done with the settings, you will need to install the widget(s) on your storefront

- [Storefront installation](/docs/category/storefront-installation)

## Setup checklist

After the app has installed on your store, go through the following steps to setup and display estimated delivery and shipping information on your product page.

1. Setup shop settings

   1. From the home page, click the "Setup" button on the Shop settings card.
   2. On the Shop settings page, go through each setting option and update as needed.
   3. Click the "Save" button once satisfied with the settings.

2. Setup widgets

   1. From the home page, click the "Setup" button on the Widgets card.
   2. On the Widgets page, choose a template option - at the top of the preview/edit card.
   3. If you would like to customize the widget further, click the edit tab.
      1. Update widget name and edit html as needed. (Contact developer for customization support or check [app documentation](https://edgeless-apps.github.io/dynamic-delivery-date-documentation/docs/settings/widgets/))
   4. Click the "Save" button once satisfied with the settings.

3. Setup shipping profiles

   1. From the home page, click the "Setup" button on the Shipping profiles card.
   2. On the Shipping profiles page, check or uncheck the "Setup general profile" checkbox to setup a general profile or custom profile, respectively.
      1. The general shipping profile applies to all products not in other shipping profiles.
      2. A custom shipping profile applies only to specific products, variants, collections, or product tags.
   3. If setting up a custom shipping profile, select your product condition preferences.
   4. Add shipping zones by clicking "Add zone" to create a shipping zone. Update zone name and choose a market with underlying countries. Click "Done" when finished.
      1. note: Countries within the same market can be split into multiple zones, but a zone can not cover more than one market.
   5. Add a shipping rate for this zone by clicking "Add rate" to add a shipping rate for this zone. Update your rate information as needed and click "Done" when finished.
   6. If needed, add more shipping zones and rates. Once satisfied, click the save button to create your shipping profile.

4. Install on storefront theme

   1. From the home page, click the "How to install on your theme" button at the top right of the home page.
   2. On the Theme installation page, choose the theme you would like to install.
      1. note: Vintage themes are not fully support. Check [app documentation](https://edgeless-apps.github.io/dynamic-delivery-date-documentation/docs/installation/vintage) for further support with vintage themes.
   3. Next, click "Install theme library".
      1. This will open a new tab to your theme editor and active the [app embed](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps#app-embeds) needed to support the widget block.
   4. Next, go back to your Shopify admin browser tab and click "Install widget block".
      1. This will take you to your theme editor and add the "Delivery date" [app block](https://help.shopify.com/en/manual/online-store/themes/theme-structure/extend/apps#app-blocks).
      2. Make sure to move the app block to the position you prefer. We recommend placing the "Delivery date" under the product price.

5. Verify the "Delivery date" widget is displaying on your theme

   1. In your theme editor, click "view" to preview your "Delivery date" app block.
