jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"app/test/integration/pages/App",
	"app/test/integration/pages/Browser",
	"app/test/integration/pages/Master",
	"app/test/integration/pages/Detail",
	"app/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "app.view."
	});

	sap.ui.require([
		"app/test/integration/MasterJourney",
		"app/test/integration/NavigationJourney",
		"app/test/integration/NotFoundJourney",
		"app/test/integration/BusyJourney",
		"app/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});