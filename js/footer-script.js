var revapi1, tpj = jQuery;
tpj(document).ready(function () {
    if (tpj("#rev_slider_1_1").revolution == undefined) {
        revslider_showDoubleJqueryError("#rev_slider_1_1");
    } else {
        revapi1 = tpj("#rev_slider_1_1").show().revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 9000,
            navigation: {
                onHoverStop: "off",
            },
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: 1240,
            gridheight: 600,
            lazyType: "none",
            shadow: 0,
            spinner: "spinner2",
            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false,
            }
        });
    }
});