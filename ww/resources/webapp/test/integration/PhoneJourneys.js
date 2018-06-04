jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"app/test/integration/NavigationJourneyPhone",
		"app/test/integration/NotFoundJourneyPhone",
		"app/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});