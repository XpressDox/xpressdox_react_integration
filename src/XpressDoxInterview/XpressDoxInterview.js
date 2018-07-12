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