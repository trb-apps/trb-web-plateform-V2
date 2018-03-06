

import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function SvgHfGuntage(_optional) {
    return (WrappedComponent) => {
        class $SvgHfGuntage extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {

			}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}
			mouseOver(e){
				if(this.props.hoverColor){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.hoverColor
					//document.getElementById("path2987").attr('fill', this.props.hoverColor) 
				}
			}
			
			mouseOut(e){
				if(this.props.color){
					e.currentTarget.childNodes[0].childNodes[0].style.fill = this.props.color
				}
			}

            render() {
                return  <svg id="svg2" viewBox="0 0 500 500" version="1.1" onMouseOver={(e)=>this.mouseOver(e)} onMouseOut={(e)=>this.mouseOut(e)}>
					 <g id="layer1">
					  <path id="path2987" strokeLinejoin="miter" d="M 150.90805,285.74603 C 153.68688,284.65179 156.61896,284.90213 157.45703,286.30517 158.29511,287.70823 156.72181,289.73268 153.94298,290.82692 151.16413,291.92116 148.23206,291.67081 147.39399,290.26776 146.55592,288.86472 148.12921,286.84027 150.90805,285.74603 z M 122.58681,297.52002 C 125.36564,296.42578 128.29773,296.67613 129.1358,298.07917 129.97387,299.48222 128.40057,301.50667 125.62174,302.60091 122.8429,303.69515 119.91083,303.44481 119.07275,302.04176 118.23469,300.63871 119.80797,298.61426 122.58681,297.52002 z M 144.73949,185.04722 C 143.55868,186.28164 140.05881,186.06155 136.92237,184.55561 133.7859,183.04969 132.20055,180.82819 133.38137,179.59377 134.5622,178.35936 138.06205,178.57946 141.19851,180.08538 144.33497,181.59131 145.92032,183.81281 144.73949,185.04722 z M 163.35514,200.63981 C 162.17431,201.87423 158.67446,201.65413 155.538,200.14821 152.40154,198.64227 150.81619,196.42078 151.99702,195.18636 153.17785,193.95194 156.6777,194.17204 159.81417,195.67798 162.95061,197.1839 164.53596,199.4054 163.35514,200.63981 z M 208.04028,234.83913 C 207.92329,236.0365 205.58165,236.78765 202.81006,236.51687 200.03845,236.24609 197.88648,235.05591 198.00346,233.85853 198.12045,232.66116 200.4621,231.91 203.23369,232.1808 206.00528,232.45158 208.15727,233.64175 208.04028,234.83913 z M 209.72916,257.69308 C 210.44821,259.15138 208.3131,261.35085 204.96028,262.60573 201.60745,263.8606 198.30652,263.69569 197.58747,262.23739 196.86841,260.77909 199.00352,258.57962 202.35636,257.32474 205.70919,256.06986 209.0101,256.23477 209.72916,257.69308 z M 229.63306,261.00454 C 230.3455,262.46607 228.20049,264.65587 224.84202,265.89558 221.48355,267.13529 218.1834,266.95547 217.47095,265.49393 216.7585,264.03239 218.90352,261.84259 222.26199,260.60288 225.62046,259.36317 228.9206,259.54299 229.63306,261.00454 z M 225.99091,225.13986 C 225.36462,226.37799 222.12425,226.66071 218.75333,225.77133 215.38241,224.88194 213.15746,223.15724 213.78375,221.91911 214.41003,220.68098 217.6504,220.39826 221.02133,221.28765 224.39225,222.17703 226.61721,223.90172 225.99091,225.13986 z M 241.34928,251.43456 C 241.59944,252.31781 239.88677,253.57632 237.52394,254.24553 235.16112,254.91473 233.04289,254.74121 232.79273,253.85797 232.54258,252.97472 234.25523,251.71621 236.61806,251.04701 238.98088,250.3778 241.09913,250.55131 241.34928,251.43456 z M 222.82511,245.62253 C 223.24542,246.8583 221.20021,248.46469 218.25704,249.21052 215.31388,249.95634 212.58724,249.55917 212.16694,248.3234 211.74664,247.08764 213.79184,245.48124 216.73501,244.73541 219.67819,243.98959 222.40481,244.38676 222.82511,245.62253 z M 241.90027,237.83299 C 241.42009,239.13476 238.23351,239.78721 234.78283,239.29026 231.33217,238.7933 228.9241,237.33513 229.40428,236.03335 229.88445,234.73156 233.07103,234.07911 236.52169,234.57607 239.97237,235.07303 242.38044,236.53119 241.90027,237.83299 z M 178.31491,282.23173 C 178.62413,283.42246 176.11689,285.10394 172.71481,285.98743 169.31273,286.87092 166.30414,286.62186 165.99492,285.43113 165.68571,284.24041 168.19295,282.55893 171.59502,281.67544 174.99709,280.79195 178.00569,281.04102 178.31491,282.23173 z M 185.16419,214.25287 C 184.41778,216.22531 180.48149,216.56373 176.37221,215.00871 172.26294,213.4537 169.5368,210.59412 170.28319,208.62168 171.0296,206.64923 174.96591,206.31083 179.07518,207.86585 183.18446,209.42085 185.91059,212.28041 185.16419,214.25287 z M 173.64894,229.06716 C 173.22346,230.39785 170.64248,231.02749 167.88414,230.4735 165.1258,229.9195 163.23464,228.39166 163.66012,227.06097 164.08559,225.73028 166.66657,225.10063 169.42491,225.65462 172.18325,226.20862 174.07441,227.73647 173.64894,229.06716 z M 208.96671,269.92179 C 209.42288,270.78181 208.05714,272.39955 205.91624,273.53511 203.77534,274.67068 201.67002,274.89404 201.21384,274.03403 200.75768,273.174 202.12342,271.55627 204.26431,270.4207 206.40521,269.28514 208.51055,269.06177 208.96671,269.92179 z M 162.72232,273.00347 C 163.03154,274.1942 160.5243,275.87568 157.12222,276.75917 153.72014,277.64266 150.71155,277.39359 150.40232,276.20287 150.09311,275.01214 152.60035,273.33066 156.00243,272.44717 159.4045,271.56368 162.41309,271.81275 162.72232,273.00347 z M 130.82708,284.69227 C 133.60591,283.59803 136.53799,283.84837 137.37606,285.25141 138.21413,286.65447 136.64083,288.67892 133.862,289.77316 131.08316,290.8674 128.15109,290.61705 127.31302,289.214 126.47495,287.81096 128.04823,285.78651 130.82708,284.69227 z M 157.21653,245.34904 C 157.28162,246.85482 154.26332,248.20824 150.47496,248.37197 146.6866,248.53571 143.56277,247.44776 143.49769,245.94198 143.4326,244.43619 146.45092,243.08276 150.23927,242.91903 154.02763,242.75529 157.15146,243.84324 157.21653,245.34904 z M 154.41004,231.62248 C 154.30659,233.90562 150.91225,235.65924 146.82853,235.53931 142.74483,235.41939 139.5182,233.47132 139.62164,231.18819 139.72508,228.90507 143.11944,227.15144 147.20314,227.27137 151.28685,227.39129 154.51349,229.33936 154.41004,231.62248 z M 140.91901,269.8028 C 141.29047,271.51139 139.40602,273.37163 136.70998,273.95778 134.01392,274.54393 131.52722,273.63404 131.15576,271.92545 130.7843,270.21688 132.66874,268.35664 135.36479,267.77048 138.06082,267.18434 140.54755,268.09423 140.91901,269.8028 z M 140.84669,216.55578 C 140.43463,218.17372 138.3748,219.0458 136.24594,218.50362 134.11707,217.96144 132.72532,216.21031 133.13738,214.59237 133.54943,212.97443 135.60927,212.10235 137.73814,212.64454 139.86701,213.18672 141.25874,214.93785 140.84669,216.55578 z M 141.84562,200.91533 C 141.15024,202.39466 138.48473,202.60592 135.89205,201.38721 133.29936,200.16849 131.76127,197.98128 132.45665,196.50194 133.15204,195.0226 135.81754,194.81134 138.41023,196.03006 141.00292,197.24878 142.541,199.43599 141.84562,200.91533 z M 202.75293,214.50085 C 202.40159,215.65149 199.95769,215.925 197.29428,215.11176 194.63087,214.29852 192.75658,212.70649 193.10791,211.55586 193.45925,210.40522 195.90317,210.1317 198.56658,210.94494 201.22997,211.75819 203.10426,213.35022 202.75293,214.50085 z M 202.88539,245.99125 C 203.15952,247.59392 200.48657,249.09452 196.91525,249.34293 193.3439,249.59135 190.22653,248.49351 189.9524,246.89085 189.67828,245.28818 192.3512,243.78757 195.92255,243.53916 199.49389,243.29074 202.61125,244.38858 202.88539,245.99125 z M 184.64386,253.76198 C 185.06416,254.99775 183.01898,256.60413 180.0758,257.34997 177.13263,258.0958 174.40601,257.69862 173.9857,256.46286 173.5654,255.22709 175.61058,253.6207 178.55376,252.87487 181.49693,252.12904 184.22356,252.52622 184.64386,253.76198 z M 188.20719,267.42492 C 188.45734,268.30817 186.74468,269.56668 184.38185,270.23589 182.01902,270.90509 179.90079,270.73157 179.65062,269.84832 179.40047,268.96508 181.11314,267.70657 183.47596,267.03736 185.83878,266.36817 187.95702,266.54168 188.20719,267.42492 z M 163.75415,256.36987 C 164.51735,257.61281 161.61222,259.69406 157.26537,261.01845 152.91852,262.34285 148.77601,262.40886 148.01283,261.1659 147.24965,259.92295 150.15477,257.84172 154.50162,256.51733 158.84847,255.19294 162.99097,255.12691 163.75415,256.36987 z M 163.99157,216.55062 C 162.81074,217.78504 159.31089,217.56494 156.17443,216.05902 153.03797,214.55309 151.45262,212.33159 152.63345,211.09717 153.81428,209.86275 157.31413,210.08285 160.45059,211.58878 163.58704,213.09471 165.17239,215.31621 163.99157,216.55062 z M 183.96723,239.75849 C 183.96723,240.83414 181.63493,241.70613 178.75789,241.70613 175.88084,241.70613 173.54856,240.83414 173.54856,239.7585 173.54856,238.68285 175.88084,237.81087 178.75789,237.81088 181.63493,237.81088 183.96723,238.68285 183.96723,239.75849 z M 193.69198,229.27666 C 193.06569,230.51479 189.82532,230.79751 186.4544,229.90813 183.08348,229.01875 180.85852,227.29404 181.4848,226.05591 182.1111,224.81778 185.35148,224.53506 188.72239,225.42445 192.09331,226.31383 194.31826,228.03853 193.69198,229.27666 z M 274.2582,241.49841 C 271.3974,238.70244 256.50753,230.63696 250.62614,235.15971 248.84328,236.53071 253.51161,238.6945 253.19943,240.6112 252.83449,242.85189 247.93367,243.98239 248.23829,246.22831 248.50567,248.19957 253.36702,248.42251 253.82367,250.37344 239.60346,263.22963 268.93196,252.57171 274.2582,246.69613 275.45188,245.22233 275.6555,242.86402 274.2582,241.49841 z M 369.97365,229.31763 440,229.31763 440,260 369.97366,260 z M 290.31485,249.65882 280.31485,249.65882 280.31485,239.65882 290.31484,239.65882 z M 371.81485,217.94007 370.0961,218.15882 301.81485,227.90882 301.81485,219.65882 301.81486,218.15882 300.31485,218.15883 290.31485,218.15882 288.81486,218.15882 288.81485,219.65883 288.81485,269.65882 288.81486,271.15882 290.31485,271.15882 300.31485,271.15882 301.81484,271.15882 301.81485,269.65882 301.81485,261.40882 370.09611,271.15882 371.81484,271.37757 371.81484,269.65882 371.81485,219.65882 z M 291.81484,221.15882 298.81486,221.15882 298.81485,229.65882 298.81486,231.37757 300.5336,231.15882 368.81485,221.40882 368.81486,267.90882 300.53359,258.15882 298.81486,257.94007 298.81486,259.65882 298.81485,268.15882 291.81486,268.15882 z M 70,49.999993 110,49.999997 C 110,49.999997 130,125.09287 130,140 130,162.36067 116.41822,177.92804 120,200 123.77551,223.26587 130.93062,226.28786 130,240 128.78453,257.90935 110.62099,268.78027 109.99999,290 109.27615,314.7348 129.34609,342.52041 130.00001,370 130.40435,386.99192 133.74534,402.35454 120.00001,420 106.25468,437.64546 70.000005,450 70.000005,450 L 69.999995,200 z M 50,49.999991 50.000005,450 59.999997,450 59.999993,49.999995 z" stroke="none" strokeLinecap="butt" strokeWidth="1px" fill={this.props.color || "#000"}/>
					 </g>
				</svg>
            }
        }
        $SvgHfGuntage.propTypes = {
            //styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $SvgHfGuntage
    }
}
    

