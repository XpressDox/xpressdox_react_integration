import React, { Component } from 'react';
import PrismCode from 'react-prism';

require('prismjs');
require('prismjs/themes/prism.css');

class Home extends React.Component {

	componentDidMount() {
		var el = document.querySelector('.tabs');
		var instance = window.M.Tabs.init(el, {});
	}

	render() {
		return (
			<div className="container">
				<h2>What is an XpressDox integrated interview?</h2>



				<div className="card">
					<div className="card-content">
								<p className="flow-text left-align">
									In order to integrate an XpressDox interview you will need:
								</p>
								<ol className="flow-text left-align browser-default">
									<li>jQuery</li>
									<li>The XpressDoxLoader script</li>
									<li>The HTML that defines the interview</li>
								</ol>
					</div>

					<div className="card-tabs ">
						<ul className="tabs tabs-fixed-width">
							<li className="tab"><a className="active" href="#test4">1.</a></li>
							<li className="tab"><a href="#test5">2.</a></li>
							<li className="tab"><a href="#test6">3.</a></li>
						</ul>
					</div>

					<div className="card-content grey lighten-4">
						<div id="test4">
							<div>
								<p className="flow-text left-align">
									If you would like to use exactly the same version of jQuery that we are currently using then you can include the following in your index.html
								</p>
								<PrismCode component="pre" className="language-markup">
								{`
<script type="text/javascript" src="https://server.xpressdox.com/Cloud/Integration/LoadScript.ashx?id=jquery"></script>
								`}
								</PrismCode>

								<p className="flow-text left-align">
									If you are already using jQuery and it is above version 2.0 then you need to include the following jQuery migrate script in order for our library yo be compatable with the version of jQuery that you are using.
								</p>
								<PrismCode component="pre" className="language-markup">
								{`
<script type="text/javascript" src="https://code.jquery.com/jquery-migrate-1.4.1.js"></script>
								`}
								</PrismCode>



							</div>
						</div>

						<div id="test5">
								<PrismCode component="pre" className="language-markup">
								{`
<!-- If you are already using the jQuery JavaScript Library in your page, do not include this line (See note above) -->
<script type="text/javascript" src="https://server.xpressdox.com/Cloud/Integration/LoadScript.ashx?id=staticXpressdoxLoader"></script>
								`}
								</PrismCode>
						</div>

						<div id="test6">
							<div>
								<PrismCode component="pre" className="language-markup">
								{`
<!-- This value identifies the template - the template can be moved or renamed without affecting this identifier -->
<input id="xdTemplateIdentifier" name="xdTemplateIdentifier" value="762b09d8-a3df-42d9-b52e-f837a4dd2402" type="hidden">
<!-- This value is only applicable when using the RESTful API - see last tab above -->
<input id="xdUsageIdentifier" name="xdUsageIdentifier" value="" type="hidden">
<!-- This value identifies the user profile -->
<input id="xdUserIdentifier" name="xdUserIdentifier" value="e077a850-485d-4e3c-b78e-4e7f9c43faf8" type="hidden">

<!-- This value can be set to empty if you choose to use the default XpressDox results page -->
<input id="xdReturnURL" name="xdReturnURL" value="" type="hidden">

<!-- You can pre-populated the interview with data by setting this value.  Initial data must be in XML format consistent with that found in XpressDox data files -->
<!-- Important - the xml data must be encoded to Base64 format for the post to be successful -->
<input id="xdInitialData" name="xdInitialData" value="" type="hidden">
					
<!-- The interview will be loaded into this container -->
<div id="divInterviewContainer">
	<!-- This HTML will display a loading gif while the interview and code are loading from the XpressDox cloud -->
	<div id="divInterviewLoading" style="height: 500px;">
		<div style="margin: 100px auto 0px auto; height: 64px; width: 64px; background: url('https://server.xpressdox.com/Cloud/ComponentStyling/LoaderMask/Images/Loader.gif') no-repeat;"></div>
		<div style="margin: 15px auto; height: 20px; text-align: center; font-weight: bold;">Loading...</div>
	</div>
</div>

<!-- Possible values for ThemeName are: Default, Albatross, Cardinal, ElectricOrange, FiscalShrike, Lourie, LumoGreen, PowderBlue, PurpleTurtle,RoseRed, SlateBlue, Turaco, Wagtail -->
<input id="xdthemeName" name="xdthemeName" value="Default" type="hidden">

<!-- Possible values for InterviewSize are: Small, Medium, Large and xLarge -->
<input id="xdInterviewSize" name="xdInterviewSize" value="Medium" type="hidden">
								`}
								</PrismCode>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;