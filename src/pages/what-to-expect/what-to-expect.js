export class WhatToExpect {
    tabs = ["Workshops", "Crafts", "Partners"]
    selectedTab = this.tabs[0];

    selectTab(tab) {
        this.selectedTab = tab;
    }

}