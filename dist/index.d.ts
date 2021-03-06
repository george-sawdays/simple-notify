import '../css/simple-notify.scss';
interface IArgs {
    status?: string;
    title?: string;
    text?: string;
    showIcon?: Boolean;
    customIcon?: string;
    showCloseButton?: Boolean;
    customClass?: string;
    speed?: number;
    effect?: string;
    autoclose?: Boolean;
    autotimeout?: number;
    gap?: number;
    distance?: number;
    type?: number;
    position?: string;
}
export default class Notify {
    wrapper: HTMLElement;
    container: HTMLElement;
    status: string;
    title: string;
    text: string;
    showIcon: Boolean;
    customIcon: string;
    showCloseButton: Boolean;
    customClass: string;
    speed: number;
    effect: string;
    autoclose: Boolean;
    autotimeout: number;
    gap: number;
    distance: number;
    type: number;
    position: string;
    selectedNotifyInEffect: Function;
    selectedNotifyOutEffect: Function;
    constructor(args: IArgs);
    private checkRequirements;
    private setContainer;
    private setPosition;
    private setCloseButton;
    private setWrapper;
    private setContent;
    private setIcon;
    private setObserver;
    private notifyIn;
    private notifyOut;
    private autoClose;
    close(): void;
    private setEffect;
    private fadeIn;
    private fadeOut;
    private slideIn;
    private slideOut;
}
export {};
