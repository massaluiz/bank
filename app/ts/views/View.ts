abstract class View<T> {

    protected _element: JQuery;

    constructor(selector: string) {

        this._element = $(selector);

    }

    public update(model: T):void {

        this._element.html(this.template(model));

    }

    public abstract template(model: T):string;

}