import React, { Component } from 'react';
import XpressDoxInterview from '../XpressDoxInterview/XpressDoxInterview';
import PrismCode from 'react-prism';

require('prismjs');
require('prismjs/themes/prism.css');
require('prismjs/components/prism-jsx.min');

class SimpleTemplate extends React.Component {

	componentDidMount() {
		var el = document.querySelector('.tabs');
		var instance = window.M.Tabs.init(el, {});
	}

	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-content">
						<div className="card-tabs ">
							<ul className="tabs tabs-fixed-width">
								<li className="tab"><a className="active" href="#test4">Example</a></li>
								<li className="tab"><a href="#test5">Source Code</a></li>
							</ul>
						</div>

						<div className="card-content grey lighten-4">
							<div id="test4">
								<div class="row">
									<div class="col s12 m7 offset-m3">
								  		<div class="card-panel left-align">
									
											<XpressDoxInterview />
									
								  		</div>
									</div>
								</div>
							</div>

							<div id="test5">
								<div>
									<PrismCode component="pre" className="language-jsx">
									{`
import React from 'react';

class XpressDoxInterview extends React.Component {

  componentDidMount() {
	window.IntegrationManager.LoadXDFiles();
  }

  render() {
	return (
	  <div>
		<input id="xdTemplateIdentifier" name="xdTemplateIdentifier" value="762b09d8-a3df-42d9-b52e-f837a4dd2402" type="hidden" />
		<input id="xdUsageIdentifier" name="xdUsageIdentifier" value="" type="hidden" />
		<input id="xdUserIdentifier" name="xdUserIdentifier" value="e077a850-485d-4e3c-b78e-4e7f9c43faf8" type="hidden" />
		<input id="xdReturnURL" name="xdReturnURL" value="" type="hidden" /> 
		<input id="xdInitialData" name="xdInitialData" value="" type="hidden" />
		<div id="divInterviewContainer">
		  <div id="divInterviewLoading" style={{height: "500px" }}>
			<div style={{ margin: '100px auto 0px auto', height: 64, width: 64, background: 'url("https://server.xpressdox.com/Cloud/ComponentStyling/LoaderMask/Images/Loader.gif") no-repeat' }} />
			<div style={{ margin: '15px auto', height: 20, textAlign: 'center', fontWeight: 'bold' }}>Loading...</div>
		  </div>
		</div>
		<input id="xdthemeName" name="xdthemeName" value="Default" type="hidden" />
		<input id="xdInterviewSize" name="xdInterviewSize" value="Medium" type="hidden" />
	  </div>
	);
  }
}

export default XpressDoxInterview;
									`}
									</PrismCode>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SimpleTemplate;