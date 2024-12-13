const anchorTagElements = document.getElementsByTagName('a');

[ ...anchorTagElements ].forEach(anchor => {
    anchor.addEventListener('mouseover', event => {
        const href = anchor.href;

        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
        console.log("Preload: " + href);
    });
});

/* Expiremental static pre-loading. */