import { svgIcons } from './Svgs'

export function Footer() {
    return (
    <section className="footer full main-content">
        <div class="app-footer-left">
            <div class="app-footer-copyright">© 2024 airbnb, Inc.</div>
            <div class="app-footer-links">
                <div class="dot-left">·</div>
                <a href="#" class="footer-link">Terms</a>
                <div class="dot">·</div>
                <a href="#" class="footer-link">Sitemap</a>
                <div class="dot">·</div>
                <a href="#" class="footer-link">Privacy</a>
                <div class="dot">·</div>
                <a href="#" class="footer-link">Your Privacy Choices</a>
                <a href="#" class="footer-link-with-svg">
                    <div class="svg-yes-no"><svg width="26" height="12" fill="none"><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" fill="#fff"></rect><path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path><path d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5" stroke="#06F" stroke-linecap="round"></path><path d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5" stroke="#fff" stroke-linecap="round"></path><rect x="0.5" y="0.5" width="25" height="11" rx="5.5" stroke="#06F"></rect></svg></div>
                </a>
            </div>
        </div>
        <div class="app-footer-right">
            <div class="svg-yes-no">{svgIcons.languageSwitch}</div>
            <a href="#" class="language">English (US)</a>
            <a href="#" class="currency">₪ ILS</a>
            <a href="#" class="support">Support & resources ˅</a>
        </div>
    </section >
    )
}
