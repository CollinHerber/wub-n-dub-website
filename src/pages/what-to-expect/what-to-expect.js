export class WhatToExpect {
    tabs = ["Workshops", "Crafts", "Partners", "Visual Artists"]
    selectedTab = this.tabs[0];

    selectTab(tab) {
        this.selectedTab = tab;
    }

}