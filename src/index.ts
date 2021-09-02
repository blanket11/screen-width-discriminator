class ScreenWidthDiscriminator {

    options: {
        [breakpoint: string]: number
    };
    defaultMobileSize: number = 768;

    constructor() {
        this.options = {
            breakpoint: this.defaultMobileSize
        };
        this.setOptions();
    }

    setOptions(options: object = []): void {
        this.options = Object.assign({
            breakpoint: this.defaultMobileSize
        }, options);
    }

    isMobile(): boolean {
        let windowWidth = window.innerWidth;
        if (windowWidth < this.options.breakpoint + 1) {
            return true;
        }
        return false;
    }
}

const screenWidthDiscriminator = new ScreenWidthDiscriminator();