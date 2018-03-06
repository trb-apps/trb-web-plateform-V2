
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';

// MATERIAL ICONS
import Lock from "material-ui/svg-icons/action/lock.js"
import Home from "material-ui/svg-icons/action/home.js"
import ViewColumn from "material-ui/svg-icons/action/view-column.js"
import ViewQuilt from "material-ui/svg-icons/action/view-quilt.js"
import ViewStream from "material-ui/svg-icons/action/view-stream.js"
import LockOpen from "material-ui/svg-icons/action/lock-open.js"
import Close from "material-ui/svg-icons/navigation/close.js"
import Apps from "material-ui/svg-icons/navigation/apps.js"
import FullScreen from "material-ui/svg-icons/navigation/fullscreen.js"
import FullScreenExit from "material-ui/svg-icons/navigation/fullscreen-exit.js"
import DropDown from "material-ui/svg-icons/navigation/arrow-drop-down.js"
import DropUp from "material-ui/svg-icons/navigation/arrow-drop-up.js"
import AddScreen from "material-ui/svg-icons/av/add-to-queue.js"
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// APP ICONS
import DropDownAll from '/imports/ui/static-data/svg/dropDownAll.jsx'
import DropUpAll from '/imports/ui/static-data/svg/dropUpAll.jsx'

@DropDownAll()
class $DropDownAll{}

@DropUpAll()
class $DropUpAll{}


export default function TrbMap_ToolBar_Template() {
    return (wrappedComponent) => {
        const $TrbMap_ToolBar_Template = (props) => {
            let styles = props.styles
            let text = props.text
			
			let buttonAttr = {
				color : props.stylesOptions.theme.colors.secondary,
				hoverColor : props.stylesOptions.theme.colors.primary
			}
			
            return (
                <div style={styles.toolBar}>
						<IconButton onClick={()=>props.toggleStateBool("openSearch")}>
							<AddScreen {...buttonAttr}/>
						</IconButton> 
						<IconButton  onClick={()=>props.toggleStateBool("openOptions")}>
							<AddScreen {...buttonAttr}/>
						</IconButton> 
					</div>
            );
        }
        $TrbMap_ToolBar_Template.propTypes = {
           // styles: PropTypes.object.isRequired,
            //text: PropTypes.object.isRequired,
        };
        return $TrbMap_ToolBar_Template
    }
}
    