sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroupa21/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} Models 
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("logaligroupa21.sapui5.Component", {
            metadata: {
                manifest : "json"
            },
            init: function () {
                // call the init fuction of the parent
                UIComponent.prototype.init.apply(this, arguments);
                // set data model on the view
                this.setModel(Models.createRecipient());
                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "logaligroupa21.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });