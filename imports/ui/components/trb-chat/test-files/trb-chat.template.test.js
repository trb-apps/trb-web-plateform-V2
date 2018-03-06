


import { Meteor } from 'meteor/meteor';
import React from 'react';
import chai  from 'chai';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Template from "./../template/trb-chat.template.jsx";
import defaultStyles from "./../styles/trb-chat.styles.default.js";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();*/

if (Meteor.isClient) {

    describe('@Template (trb-chat.template.jsx)', function() {

        before(function() {
            TrbChat = Template()()
            wrapper = mount(
                <MuiThemeProvider>
					  <TrbChat  
							styles={{title : {color : "testColor"}}}
							text = {{title : "test title"}}
						/>
			  </MuiThemeProvider>
            );
        });

        describe('Return expected DOM tree', function() {
            it('Class name of root div tag is "container"', function() {
                expect(wrapper.first().hasClass('container')).to.be.true;
            });
            it('Has a h1 tag', function() {
                expect(wrapper.find('h1')).to.have.length(1);
            });
        });

        describe("text and styles are set correctly", function() {

            it('DOM elements ids match with default styles keys', function() {
                for (let nodeName in defaultStyles) {
                    expect(wrapper.find('#trb-chat-' + nodeName).exists()).to.be.true;
                }
            });

            it('Styles provided via props.styles are correctly applied', function() {
                expect(wrapper.find('#trb-chat-title').props().style.color).to.equal("testColor");
            });
            it('Texts provided via props.text are correctly applied', function() {
                expect(wrapper.find('#trb-chat-title').get(0).innerHTML).to.equal("test title");
            });
        });

    });

}
    
    
    
    