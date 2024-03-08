window.addEventListener('load', () => {
  // eslint-disable-next-line max-len
  if (window.Shopify && window.Shopify.theme && window.PXUTheme && navigator && navigator.sendBeacon && window.Shopify.designMode) {
    if (sessionStorage.getItem('oots_beacon')) return;

    navigator.sendBeacon('https://app.outofthesandbox.com/beacon', new URLSearchParams({
      shop_domain: window.Shopify.shop,
      shop_id: window.Store.id,
      theme_name: window.PXUTheme.name,
      theme_version: window.PXUTheme.version,
      theme_store_id: window.Shopify.theme.theme_store_id,
      theme_id: window.Shopify.theme.id,
      theme_role: window.Shopify.theme.role,
    }));

    sessionStorage.setItem('oots_beacon', '');
  }
});
