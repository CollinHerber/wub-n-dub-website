export class WubNavbar {
    showNav = true;
    lastScrollPosition;

    attached() {
        setTimeout( () => {
            document.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
                const st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                this.showNav = st < this.lastScrollPosition;
                this.lastScrollPosition = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            });
        }, 100)
    };
}