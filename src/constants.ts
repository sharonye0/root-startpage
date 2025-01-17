/*****************/
/* EDITABLE INFO */
/*****************/

/* -------------------------------------------------------- */
type TimeFormat = "12" | "24";

class User {
    public name: string = "Sharon";
    public ACCENT_COLOR = "#d21404";
    public TEXT_COLOR = "#eee";
    public BACKGROUND_COLOR = "#0d1b2a";
    public SECONDARY_BACKGROUND = "#1b263b";

    public TRANSITION_DURATION = "0.2s";

    public timeFormat: TimeFormat = "24";

    public openNewTabOnClick: boolean = false;

    public userCards: Card[] = [
        {
            name: "Discord",
            icon: "ri-discord-fill",
            link: "https://discord.com/app",
            color: "#5865F2",
        },
        {
            name: "Reddit",
            icon: "ri-reddit-fill",
            link: "https://www.reddit.com/",
            color: "#FF4500",
        },
        {
            name: "Figma",
            icon: "ri-pen-nib-fill",
            link: "https://www.figma.com/",
        },
        {
            name: "Github",
            icon: "ri-github-fill",
            link: "https://github.com/",
            color: "#eee",
        },
        {
            name: "Twitter",
            icon: "ri-twitter-fill",
            link: "https://twitter.com",
            color: "#1DA1F2",
        },
        {
            name: "Dribbble",
            icon: "ri-dribbble-fill",
            link: "https://dribbble.com/",
            color: "#ea4c89",
        },
        {
            name: "CodeSandbox",
            icon: "ri-braces-fill",
            link: "https://codesandbox.io/dashboard/",
        },
        {
            name: "YouTube",
            icon: "ri-youtube-fill",
            link: "https://www.youtube.com/",
            color: "#FF0000",
        },
        {
            name: "LinkedIn",
            icon: "ri-linkedin-fill",
            link: "https://www.linkedin.com/",
        },
        {
            name: "Gmail",
            icon: "ri-google-fill",
            link: "https://mail.google.com/",
        },
    ];


    // Setters
    setName(name: string) {
        this.name = name;
        const nameSpan = document.getElementById("userName") as HTMLSpanElement;
        nameSpan.innerText = this.name;
    };
    setAccentColor(newColor: string) {
        this.ACCENT_COLOR = newColor;
    }
    setBackgroundColor(newColor: string) {
        this.BACKGROUND_COLOR = newColor;
    }
    setSecondaryBackgroundColor(newColor: string) {
        this.SECONDARY_BACKGROUND = newColor;
    }
    setTextColor(newColor: string) {
        this.TEXT_COLOR = newColor;
    }
    setTransitionDuration(transitionDuration: string) {
        this.TRANSITION_DURATION = transitionDuration;
    }
    setTimeFormat(timeFormat: TimeFormat) {
        this.timeFormat = timeFormat;
    }
    setOpenNewTabOnClick(newTabOnClick: boolean) {
        this.openNewTabOnClick = newTabOnClick;
    }

    // Getters
    getName() {
        return this.name;
    }
    getAccentColor() {
        return this.ACCENT_COLOR;
    }
    getBackgroundColor() {
        return this.BACKGROUND_COLOR;
    }
    getSecondaryBackgroundColor() {
        return this.SECONDARY_BACKGROUND;
    }
    getTextColor() {
        return this.TEXT_COLOR;
    }
    getTransitionDuration() {
        return this.TRANSITION_DURATION;
    }
    getTimeFormat() {
        return this.timeFormat;
    }
    getOpenNewTabOnClick() {
        return this.openNewTabOnClick;
    }
}

export const USER = new User();

/* -------------------------------------------------------- */

export const DAYS: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const MONTHS: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

