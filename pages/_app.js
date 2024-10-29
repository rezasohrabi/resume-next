import Head from 'next/head';
import '../styles/globals.scss';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
  function initializeHotjar() {
    if (typeof window !== 'undefined') {
      (function (h, o, t, j, a, r) {
        h.hj =
          h.hj ||
          function () {
            (h.hj.q = h.hj.q || []).push(arguments);
          };
        h._hjSettings = { hjid: 3260748, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    }
  }

  function initializeClarity() {
    if (typeof window !== 'undefined') {
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', 'enfdrs352s');
    }
  }

  function initializeGTM() {
    if (typeof window !== 'undefined') {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-PWN6DKR2');

      // document.addEventListener('DOMContentLoaded', function () {
      //   cookieconsent.run({
      //     notice_banner_type: 'interstitial',
      //     consent_type: 'express',
      //     palette: 'dark',
      //     language: 'en',
      //     page_load_consent_levels: ['strictly-necessary'],
      //     notice_banner_reject_button_hide: false,
      //     preferences_center_close_button_hide: false,
      //     page_refresh_confirmation_buttons: false,
      //   });
      // });
    }
  }

  initializeHotjar();
  initializeClarity();
  initializeGTM();

  useEffect(() => {
    // Initialize Cookie Consent and Google Consent Mode
    const initializeCookieConsent = () => {
      const script = document.createElement('script');
      script.src =
        'https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js';
      script.async = true;
      script.onload = () => {
        window.cookieconsent.run({
          notice_banner_type: 'interstitial',
          consent_type: 'express',
          palette: 'dark',
          language: 'en',
          page_load_consent_levels: ['strictly-necessary'],
          notice_banner_reject_button_hide: false,
          preferences_center_close_button_hide: false,
          page_refresh_confirmation_buttons: false,
          callbacks: {
            scripts_specific_loaded: (level) => {
              // Update Google Consent Mode based on user consent level
              if (level === 'targeting') {
                window.gtag('consent', 'update', {
                  ad_storage: 'granted',
                  ad_user_data: 'granted',
                  ad_personalization: 'granted',
                  analytics_storage: 'granted',
                });
              }
            },
          },
          callbacks_force: true,
        });
      };
      document.head.appendChild(script);
    };

    // Load Google Consent Mode and Google Analytics
    const initializeGoogleConsentMode = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      // Set default consent to denied
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      });

      // Load Google Analytics script
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=TAG_ID`;
      document.head.appendChild(gaScript);

      // Configure Google Analytics
      gtag('js', new Date());
      gtag('config', 'TAG_ID');
    };

    // Initialize functions on component mount
    initializeGoogleConsentMode();
    initializeCookieConsent();
  }, []);

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
        <meta name='theme-color' content='#26a69a' />
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PWN6DKR2'
            height='0'
            width='0'
            style={{
              display: 'none',
              visibility: 'hidden',
            }}
          ></iframe>
        </noscript>
        <script
          type='text/javascript'
          src='https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js'
          charset='UTF-8'
        ></script>

        <noscript>
          Free cookie consent management tool by{' '}
          <a href='https://www.termsfeed.com/'>TermsFeed</a>
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
