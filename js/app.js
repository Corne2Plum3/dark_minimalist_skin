/* inputs var */
var main_color_id = 0;  // main color id (0-253)
var circle_type = 0; // type of circle (0-3)
var spinner_type = 0; // type of spinner (0-1)
var cursor_color = 0; // type of cursor color (0-1)
var cursor_trail = 0; // enable or disable cursor trail (0-1)
var scorebar_type = 0; // the type of HP bar (0-1)
var hitsounds_type = 0; // type of hitsounds in gameplay (0-1)

/* font */
var font_normal = "'Gordita Medium'"; // the name should be in '' if he have spaces
var font_bold = "'Gordita Bold'";

/* colors */
// Material color picker: https://material-ui.com/customization/color/
const color_SSH = "#b8ffef"; // teal A100 light
const color_SS = "#ffea00"; // yellow A400 normal
const color_SH = "#b8ffef"; // teal A100 light
const color_S = "#ffc400"; // amber A400 normal
const color_A = "#76ff03"; // lightgreen A400 normal
const color_B = "#00b0ff"; // lightblue A400 normal
const color_C = "#d500f9"; // purple A400 normal
const color_D = "#ff1744"; // red A400 normal

var main_color;

/* consts */
const elements_2x = [ // file name (without @2x.png) + canvas name + width + height (width and height for 2x versions!!!!)
	["approachcircle","approachcircle",256,256],
	["arrow-warning","arrow_warning",260,200],
	["button-left", "button_left",16,154],
	["button-middle", "button_middle",6,154],
	["button-right", "button_right",16,154],
	["combo-0","combo_0",70,100],
	["combo-1","combo_1",70,100],
	["combo-2","combo_2",70,100],
	["combo-3","combo_3",70,100],
	["combo-4","combo_4",70,100],
	["combo-5","combo_5",70,100],
	["combo-6","combo_6",70,100],
	["combo-7","combo_7",70,100],
	["combo-8","combo_8",70,100],
	["combo-9","combo_9",70,100],
	["combo-x","combo_x",70,100],
	["count1","count1",450,450],
	["count2","count2",450,450],
	["count3","count3",450,450],
	["cursor","cursor",256,256],
	["cursortrail","cursortrail",256,256],
	["default-0","default_0",70,100],
	["default-1","default_1",70,100],
	["default-2","default_2",70,100],
	["default-3","default_3",70,100],
	["default-4","default_4",70,100],
	["default-5","default_5",70,100],
	["default-6","default_6",70,100],
	["default-7","default_7",70,100],
	["default-8","default_8",70,100],
	["default-9","default_9",70,100],
	["fail-background","fail_background",2732,1536],
	["followpoint-0","followpoint_0",256,60],
	["followpoint-1","followpoint_1",256,60],
	["followpoint-2","followpoint_2",256,60],
	["followpoint-3","followpoint_3",256,60],
	["followpoint-4","followpoint_4",256,60],
	["followpoint-5","followpoint_5",256,60],
	["followpoint-6","followpoint_6",256,60],
	["followpoint-7","followpoint_7",256,60],
	["followpoint-8","followpoint_8",256,60],
	["followpoint-9","followpoint_9",256,60],
	["followpoint-10","followpoint_10",256,60],
	["followpoint-11","followpoint_11",256,60],
	["followpoint-12","followpoint_12",256,60],
	["followpoint-13","followpoint_13",256,60],
	["followpoint-14","followpoint_14",256,60],
	["followpoint-15","followpoint_15",256,60],
	["go","go",900,450],
	["hit0","hit0",384,384],
	["hit50","hit50",384,384],
	["hit100","hit100",384,384],
	["hit100k","hit100k",384,384],
	["hit300","hit300",384,384],
	["hit300g","hit300g",384,384],
	["hit300k","hit300k",384,384],
	["hit0-0","hit0_0",192,192],
	["hit50-0","hit50_0",192,192],
	["hit100-0","hit100_0",192,192],
	["hit100k-0","hit100k_0",192,192],
	["hitcircle","hitcircle",256,256],
	["hitcircleoverlay","hitcircleoverlay",256,256],
	["inputoverlay-background","inputoverlay_background",400,100],
	["inputoverlay-key","inputoverlay_key",100,100],
	["lighting","lighting",368,368],
	["menu-back","menu_back",450,180],
	["menu-button-background", "menu_button_background",1410,206],
	["mode-fruits","mode_fruits",496,496],
	["mode-mania","mode_mania",496,496],
	["mode-osu","mode_osu",496,496],
	["mode-taiko","mode_taiko",496,496],
	["mode-fruits-med","mode_fruits_med",216,216],
	["mode-mania-med","mode_mania_med",216,216],
	["mode-osu-med","mode_osu_med",216,216],
	["mode-taiko-med","mode_taiko_med",216,216],
	["mode-fruits-small","mode_fruits_small",4400,2900],
	["mode-mania-small","mode_mania_small",4400,2900],
	["mode-osu-small","mode_osu_small",4400,2900],
	["mode-taiko-small","mode_taiko_small",4400,2900],
	["pause-back","pause_back",768,192],
	["pause-continue","pause_continue",768,192],
	["pause-replay","pause_replay",768,192],
	["pause-retry","pause_retry",768,192],
	["pause-overlay","pause_overlay",2732,1536],
	["play-skip","play_skip",600,300],
	["ranking-graph","ranking_graph",634,320],
	["ranking-panel","ranking_panel",2732,1336],
	["ranking-perfect","ranking_perfect",634,320],
	["ranking-title","ranking_title",560,192],
	["ranking-a","ranking_a",750,900],
	["ranking-b","ranking_b",750,900],
	["ranking-c","ranking_c",750,900],
	["ranking-d","ranking_d",750,900],
	["ranking-s","ranking_s",750,900],
	["ranking-sh","ranking_sh",750,900],
	["ranking-x","ranking_x",750,900],
	["ranking-xh","ranking_xh",750,900],
	["ranking-a-small","ranking_a_small",75,100],
	["ranking-b-small","ranking_b_small",75,100],
	["ranking-c-small","ranking_c_small",75,100],
	["ranking-d-small","ranking_d_small",75,100],
	["ranking-s-small","ranking_s_small",75,100],
	["ranking-sh-small","ranking_sh_small",75,100],
	["ranking-x-small","ranking_x_small",75,100],
	["ranking-xh-small","ranking_xh_small",75,100],
	["ready","ready",1200,450],
	["reversearrow","reversearrow",256,256],
	["section-fail", "section_fail",924,244],
	["section-pass", "section_pass",924,244],
	["score-0","score_0",70,100],
	["score-1","score_1",70,100],
	["score-2","score_2",70,100],
	["score-3","score_3",70,100],
	["score-4","score_4",70,100],
	["score-5","score_5",70,100],
	["score-6","score_6",70,100],
	["score-7","score_7",70,100],
	["score-8","score_8",70,100],
	["score-9","score_9",70,100],
	["score-comma","score_comma",70,100],
	["score-dot","score_dot",70,100],
	["score-percent","score_percent",70,100],
	["score-x","score_x",70,100],
	["scorebar-bg","scorebar_bg",1125,100],
	["scorebar-colour","scorebar_colour",1085,50],
	["scoreentry-0","scoreentry_0",21,25],
	["scoreentry-1","scoreentry_1",21,25],
	["scoreentry-2","scoreentry_2",21,25],
	["scoreentry-3","scoreentry_3",21,25],
	["scoreentry-4","scoreentry_4",21,25],
	["scoreentry-5","scoreentry_5",21,25],
	["scoreentry-6","scoreentry_6",21,25],
	["scoreentry-7","scoreentry_7",21,25],
	["scoreentry-8","scoreentry_8",21,25],
	["scoreentry-9","scoreentry_9",21,25],
	["scoreentry-comma","scoreentry_comma",21,25],
	["scoreentry-dot","scoreentry_dot",21,25],
	["scoreentry-percent","scoreentry_percent",21,25],
	["scoreentry-x","scoreentry_x",21,25],
	["selection-mode","selection_mode",2286,1860],
	["selection-mode-over","selection_mode_over",186,180],
	["selection-mods","selection_mods",154,180],
	["selection-mods-over","selection_mods_over",154,180],
	["selection-random","selection_random",154,180],
	["selection-random-over","selection_random_over",154,180],
	["selection-options","selection_options",154,180],
	["selection-options-over","selection_options_over",154,180],
	["selection-mod-autoplay","selection_mod_autoplay",136,136],
	["selection-mod-cinema","selection_mod_cinema",136,136],
	["selection-mod-doubletime","selection_mod_doubletime",136,136],
	["selection-mod-easy","selection_mod_easy",136,136],
	["selection-mod-fadein","selection_mod_fadein",136,136],
	["selection-mod-flashlight","selection_mod_flashlight",136,136],
	["selection-mod-halftime","selection_mod_halftime",136,136],
	["selection-mod-hardrock","selection_mod_hardrock",136,136],
	["selection-mod-hidden","selection_mod_hidden",136,136],
	["selection-mod-key1","selection_mod_key1",136,136],
	["selection-mod-key2","selection_mod_key2",136,136],
	["selection-mod-key3","selection_mod_key3",136,136],
	["selection-mod-key4","selection_mod_key4",136,136],
	["selection-mod-key5","selection_mod_key5",136,136],
	["selection-mod-key6","selection_mod_key6",136,136],
	["selection-mod-key7","selection_mod_key7",136,136],
	["selection-mod-key8","selection_mod_key8",136,136],
	["selection-mod-key9","selection_mod_key9",136,136],
	["selection-mod-keycoop","selection_mod_keycoop",136,136],
	["selection-mod-mirror","selection_mod_mirror",136,136],
	["selection-mod-nightcore","selection_mod_nightcore",136,136],
	["selection-mod-nofail","selection_mod_nofail",136,136],
	["selection-mod-perfect","selection_mod_perfect",136,136],
	["selection-mod-random","selection_mod_random",136,136],
	["selection-mod-relax","selection_mod_relax",136,136],
	["selection-mod-relax2","selection_mod_relax2",136,136],
	["selection-mod-scorev2","selection_mod_scorev2",136,136],
	["selection-mod-spunout","selection_mod_spunout",136,136],
	["selection-mod-suddendeath","selection_mod_suddendeath",136,136],
	["selection-mod-target","selection_mod_target",136,136],
	["selection-mod-touchdevice","selection_mod_touchdevice",136,136],
	["selection-tab","selection_tab",280,52],
	["sliderb0","sliderb0",256,256],
	["sliderfollowcircle","sliderfollowcircle",512,512],
	["sliderscorepoint","sliderscorepoint",36,36],
	["spinner-approachcircle","spinner_approachcircle",630,630],
	["spinner-circle","spinner_circle",1200,1200],
	["spinner-clear","spinner_clear",180,380],
	["spinner-metre","spinner_metre",2048,1384],
	["spinner-rpm","spinner_rpm",560,112],
	["star","star",100,100]
];
const transparant_files = [
	"hit300-0","hit300g-0","hit300k-0",
	"ranking-accuracy","ranking-maxcombo",
	"sliderendcircle",
	"spinner-background","spinner-glow","spinner-middle","spinner-osu","spinner-spin",
	"star2"
];
const sound_files = [ // file name without extension + customizable?
	["drum-hitclap",1],
	["drum-hitnormal",1],
	["drum-hitfinish",1],
	["drum-hitwhistle",1],
	["drum-slidertick",1],
	["drum-sliderslide",1],
	["drum-sliderwhistle",1],
	["normal-hitnormal",1],
	["normal-hitclap",1],
	["normal-hitfinish",1],
	["normal-hitwhistle",1],
	["normal-slidertick",1],
	["normal-sliderslide",1],
	["normal-sliderwhistle",1],
	["soft-hitnormal",1],
	["soft-hitclap",1],
	["soft-hitfinish",1],
	["soft-hitwhistle",1],
	["soft-slidertick",1],
	["soft-sliderslide",1],
	["soft-sliderwhistle",1]
]

/* material colors */
const material = [
	// 50 100 200 300 400 500 600 700 800 900 a100 a200 a400 a700
	["#FFEBEE","#FFCDD2","#EF9A9A","#E57373","#EF5350","#F44336","#E53935","#D32F2F","#C62828","#B71B1C","#FF8A80","#FF5252","#FF1744","#D50000"], // red
	["#FCE4EC","#F8BBD0","#F48FB1","#F06292","#EC407A","#E91E63","#D81B60","#C2185B","#AD1457","#880E4F","#FF80AB","#FF4081","#F50057","#C51162"], // pink
	["#F3E5F5","#E1BEE7","#CE93D8","#BA68C8","#AB47BC","#9C27B0","#8E24AA","#7B1FA2","#6A1B9A","#4A148C","#EA80FC","#E040FB","#D500F9","#AA00FF"], // purple
	["#EDE7F6","#D1C4E9","#B39DDB","#9575CD","#7E57C2","#673AB7","#5E35B1","#512DA8","#4527A0","#311B92","#B388FF","#7C4DFF","#651FFF","#6200EA"], // deep purple
	["#E8EAF6","#C5CAE9","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E","#8C9EFF","#536DFE","#3D5AFE","#304FFE"], // indigo
	["#E3F2FD","#BBDEFB","#90CAF9","#64B5F6","#42A5F5","#2196F3","#1E88E5","#1976D2","#1565C0","#0D47A1","#82B1FF","#448AFF","#2979FF","#2962FF"], // blue
	["#E1F5FE","#B3E5FC","#81D4FA","#4FC3F7","#29B6F6","#03A9F4","#039BE5","#0288D1","#0277BD","#01579B","#80D8FF","#40C4FF","#00B0FF","#0091EA"], // light blue
	["#E0F7FA","#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F","#006064","#84FFFF","#18FFFF","#00E5FF","#00B8D4"], // cyan
	["#E0F2F1","#B2DFDB","#80CBC4","#4DB6AC","#26A69A","#009688","#00897B","#00796B","#00695C","#004D40","#A7FFEB","#64FFDA","#1DE9B6","#00BFA5"], // teal
	["#E8F5E9","#C8E6C9","#A5D6A7","#81C784","#66BB6A","#4CAF50","#43A047","#388E3C","#2E7D32","#1B5E20","#B9F6CA","#69F0AE","#00E676","#00C853"], // green
	["#F1F8E9","#DCEDC8","#C5E1A5","#AED581","#9CCC65","#8BC34A","#7CB342","#689F38","#558B2F","#33691E","#CCFF90","#B2FF59","#76FF03","#64DD17"], // light green
	["#F9FBE7","#F0F4C3","#E6EE9C","#DCE775","#D4E157","#CDDC39","#C0CA33","#AFB42B","#9E9D24","#827717","#F4FF81","#EEFF41","#C6FF00","#AEEA00"], // lime
	["#FFFDE7","#FFF9C4","#FFF59D","#FFF176","#FFEE58","#FFEB3B","#FDD835","#FBC02D","#F9A825","#F57F17","#FFFF8D","#FFFF00","#FFEA00","#FFD600"], // yellow
	["#FFF8E1","#FFECB3","#FFE082","#FFD54F","#FFCA28","#FFC107","#FFB300","#FFA000","#FF8F00","#FF6F00","#FFE57F","#FFD740","#FFC400","#FFAB00"], // amber
	["#FFF3E0","#FFE0B2","#FFCC80","#FFB74D","#FFA726","#FF9800","#FB8C00","#F57C00","#EF6C00","#E65100","#FFD180","#FFAB40","#FF9100","#FF6D00"], // orange
	["#FBE9E7","#FFCCBC","#FFAB91","#FF8A65","#FF7043","#FF5722","#F4511E","#E64A19","#D84315","#BF360C","#FF9E80","#FF6E40","#FF3D00","#DD2C00"], // deep orange
	["#EFEBE9","#D7CCC8","#BCAAA4","#A1887F","#8D6E63","#795548","#6D4C41","#5D4037","#4E342E","#3E2723"], // brown
	["#FAFAFA","#F5F5F5","#EEEEEE","#E0E0E0","#BDBDBD","#9E9E9E","#757575","#616161","#424242","#212121"], // gray
	["#ECEFF1","#CFD8DC","#B0BEC5","#90A4AE","#78909C","#607D8B","#546E7A","#455A64","#37474F","#263238"], // blue gray
];
const material_colors = ["Red","Pink","Purple","Deep Purple","Indigo","Blue","Light blue","Cyan","Teal","Green","Light green","Lime","Yellow","Amber","Orange","Deep orange","Brown","Gray","Blue gray"]; // list of all colors names
const material_shades = ["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"]; // all shades values

/* INPUT FUNCTIONS */
function generate_canvas() { // generate all canvas files and the skin.ini
	main_color = material[get_color_data(main_color_id)[0]][get_color_data(main_color_id)[1]]; // get main color
	
	document.getElementById("generated_elements").removeChild(document.getElementById("generated_elements_1x"));
	document.getElementById("generated_elements").removeChild(document.getElementById("generated_elements_2x"));
	
	new_element = document.createElement("div");
	new_element.id = "generated_elements_1x";
	document.getElementById("generated_elements").appendChild(new_element);
	new_element = document.createElement("div");
	new_element.id = "generated_elements_2x";
	document.getElementById("generated_elements").appendChild(new_element);
	
	/* generate 1x & 2x elements */
	for(var i=0 ; i<elements_2x.length ; i++) {
		generate_element(elements_2x[i][1], i);
	}
	
	generate_skin_ini();
}

function set_parameter(setting, value) {
	switch(setting) {
		case "main_color_id":
			main_color_id = parseInt(document.getElementById("main_color_id_input").value);
			break;
		case "circle_type":
			circle_type = value;
			break;
		case "spinner_type":
			spinner_type = value;
			break;
		case "cursor_color":
			cursor_color = value;
			break;
		case "cursor_trail":
			cursor_trail = value;
			break;
		case "scorebar_type":
			scorebar_type = value;
			break;
		case "hitsounds_type":
			hitsounds_type = value;
			break;
	}
	console.log("Skin ID = " + get_skin_id().toString());
}




/* COLORS functions & tools */
function add_color(c1, c2) { /* return the color when c1 is over c2 (c1 and c2 are #rrggbbaa) */
	// convert values into float 0-1
	var r1 = parseInt("0x" + c1[1] + c1[2])/255; // float 0-1
	var g1 = parseInt("0x" + c1[3] + c1[4])/255;
	var b1 = parseInt("0x" + c1[5] + c1[6])/255;
	var a1 = parseInt("0x" + c1[7] + c1[8])/255;
	var r2 = parseInt("0x" + c2[1] + c2[2])/255;
	var g2 = parseInt("0x" + c2[3] + c2[4])/255;
	var b2 = parseInt("0x" + c2[5] + c2[6])/255;
	var a2 = parseInt("0x" + c2[7] + c2[8])/255;
	
	// calc
	var r3, g3, b3, a3;
	r3 = (r2*a2+(r1*a1*(1-a2)))/(a2+a1*(1-a2));
    g3 = (g2*a2+(g1*a1*(1-a2)))/(a2+a1*(1-a2));
    b3 = (b2*a2+(b1*a1*(1-a2)))/(a2+a1*(1-a2));
    a3 = a2+(a1*(1-a2));
	
	// convert to hex
	r3 = parseInt(255*r3);
	if(r3 < 16) {
		r3 = "0" + Math.round(r3).toString(16);
	} else {
		r3 = Math.round(r3).toString(16);  // Math.round(((r1*r2)/255)) = int 0-255
	}
	g3 = parseInt(255*g3);
	if(g3 < 16) {
		g3 = "0" + Math.round(g3).toString(16);
	} else {
		g3 = Math.round(g3).toString(16);
	}
	b3 = parseInt(255*b3);
	if(b3 < 16) {
		b3 = "0" + Math.round(b3).toString(16);
	} else {
		b3 = Math.round(b3).toString(16);
	}
	a3 = parseInt(255*a3);
	if(a3 < 16) {
		a3 = "0" + Math.round(a3).toString(16);
	} else {
		a3 = Math.round(a3).toString(16);
	}
	
	return "#" + r3 + g3 + b3 + a3;
}
	
function prod_color(c1, c2) { /* returns the product of 2 colors (colors are "#rrggbb") */
	// get values in int
	var r1 = parseInt("0x" + c1[1] + c1[2]); // int 0-255
	var g1 = parseInt("0x" + c1[3] + c1[4]);
	var b1 = parseInt("0x" + c1[5] + c1[6]);
	var r2 = parseInt("0x" + c2[1] + c2[2]);
	var g2 = parseInt("0x" + c2[3] + c2[4]);
	var b2 = parseInt("0x" + c2[5] + c2[6]);
	
	// calc and convert
	var r3, g3, b3;
	
	// convert to hex
	// red
	if(Math.round(((r1*r2)/255)) < 16){ // to be sure to have 2 carcters hexa
		r3 = "0" + Math.round(((r1*r2)/255)).toString(16);
	} else {
		r3 = Math.round(((r1*r2)/255)).toString(16);  // Math.round(((r1*r2)/255)) = int 0-255
	}
	// green
	if(Math.round(((g1*g2)/255)) < 16){ // Math.round(((r1*r2)/255)) = int 0-255
		g3 = "0" + Math.round(((g1*g2)/255)).toString(16);
	} else {
		g3 = Math.round(((g1*g2)/255)).toString(16);
	}
	// blue
	if(Math.round(((b1*b2)/255)) < 16){ // Math.round(((r1*r2)/255)) = int 0-255
		b3 = "0" + Math.round(((b1*b2)/255)).toString(16);
	} else {
		b3 = Math.round(((b1*b2)/255)).toString(16);
	}
	
	return "#" + r3 + g3 + b3;
}

function hex_to_rgb(hex_color) { // converts #rrggbb into r, g, b (0-255)
	return parseInt(hex_color[1]+hex_color[2],16).toString()+","+parseInt(hex_color[3]+hex_color[4],16).toString()+","+ parseInt(hex_color[5]+hex_color[6],16).toString();
}
	
function get_color_id(color_id, shade_id) { // returns the id of a color with the color_id ans shade_id
	if(color_id < 16) { // all colors with 16 shades versions
		if(Math.round(color_id)>=0 && Math.round(shade_id)>=0 && Math.round(shade_id)<=13) {
			return color_id*14 + shade_id;
		} else {
			return -1; // invalid input(s)
		}
	} else { // brown, gray and blue gray
		if(Math.round(color_id)<=18 && Math.round(shade_id)>=0 && Math.round(shade_id)<=9) {
			return 16*14 + (color_id-16)*10 + shade_id;
		} else {
			return -1;
		}
	}
}

function get_color_data(id) { // returns [color_id, shade_id] with the color id
	if(Math.round(id)>=0 && Math.round(id)<=254) {
		id = Math.round(id);
		if(id <= 224) {
			return [Math.floor(id/14), id%14];
		} else {
			return [Math.floor((id-224)/10)+16, (id-224)%10];
		}
	} else {
		return [0,0]; // invalid id
	}
}


/* skin ID tools */
function get_skin_id() { // return the skin id according to global variables
	/*
	  Imagine every digit is a bit: (0-1). The total give a unique binary number, and we'll add 1 to get the ID
		111 1111 1223 4567
		1: main color id (0-253) (8 bits) [7]
		2: type of circle (0-3) (2 bits) [5]
		3: type of spinner (0-1) (1 bit) [4]
		4: type of cursor color (0-1) (1 bit) [3]
		5: enable or disable cursor trail (0-1) (1 bit) [2]
		6: the type of HP bar (0-1) (1 bit) [1]
		7: type of hitsounds in gameplay (0-1) (1 bit) [0]
	*/
	
	return main_color_id*(2**7)+circle_type*(2**5)+spinner_type*(2**4)+cursor_color*(2**3)+cursor_trail*(2**2)+scorebar_type*(2**1)+hitsounds_type*(1)+1;
}

/* DRAWING functions */

function generate_element(canvas_name, element_id) {
	// element id = index of the element 
	
	/* useful tools */
	
	function draw_centered_circle(canvas_name, border_size, cs, gradient_style, gradient_direction, color1, color2, shadow_style, shadow_blur, shadow_color) { /* the function to draw a centered circle */
		// from this: https://github.com/Corne2Plum3/osu-hitcircle-generator.github.io/blob/main/js/app.js
		
		/* Arguments:
		 1. canvas_name (str): name of the canvas
		 2. border_size (int): 0=filled circle ; n=size in px of the stroke
		 3. cs (float): radius of the circle in px (border included)
		 4. gradient_style (str): "none", "linear", "radial"
		 5. gradient_direction (float): direction of the linear gradient
		 6. color1 (color): "rgba(r, g, b, a)" for exemple
		 7. color2 (color): "rgba(r, g, b, a)" for exemple
		 8. shadow_style (str): "none", "out", "in/out"
		 9. shadow_blur (int): shadow blur
		10. shadow_color (color): "rgba(r, g, b, a)" for exemple
		*/
				
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext('2d');
				
		var gradient; // the gradient used to color the circle
				
		/* 1. define the gradient */
		switch(gradient_style){
			case "none":
				gradient = color1;
				break;
			case "linear":
				var x1 = Math.round((canvas.width/2) + (cs * Math.cos(Math.PI*gradient_direction/180-(Math.PI/2))));
				var y1 = Math.round((canvas.height/2) + (cs * Math.sin(Math.PI*gradient_direction/180-(Math.PI/2))));
				var x2 = canvas.width - x1;
				var y2 = canvas.height - y1;
				gradient = ctx.createLinearGradient(x1, y1, x2, y2);
				gradient.addColorStop(0, color1);
				gradient.addColorStop(1, color2);
				break;
			case "radial":
				// color1 = center ; color2 = out
				gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, cs);
				gradient.addColorStop(0, color1);
				if(border_size != 0) { /* don't add this color stop for filled circles */
					gradient.addColorStop(1-(border_size/cs), color1);
				}
				gradient.addColorStop(1, color2);
				break;
		}
				
			/* 2. define strokeStyle, fillStyle and lineWidth */
			if(border_size == 0){ // fill mode
				ctx.lineWidth = 0;
				ctx.fillStyle = gradient;
				ctx.strokeStyle = "rgba(0,0,0,0)";
			} else { // border mode
				ctx.lineWidth = border_size;
				ctx.fillStyle = "rgba(0,0,0,0)";
				ctx.strokeStyle = gradient;
			}
				
			/* 3. define the shadow */
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			switch(shadow_style){
				case "none":
					ctx.shadowBlur = 0;
					ctx.shadowColor = "rgba(0,0,0,0)";
					break;
				case "out":
					ctx.shadowBlur = shadow_blur;
					ctx.shadowColor = shadow_color;
					break;
				case "in/out":
					ctx.shadowBlur = shadow_blur;
					ctx.shadowColor = shadow_color;
					break;
			}
				
			/* 4. draw */
			// specific case of shadow_style = "out"
			if(shadow_style == "out"){
				// set the line width and the stroke style for this hidden circle
				ctx.lineWidth = 2;
				ctx.strokeStyle = shadow_color;
				// draw a thin ring in the size of the circle (doesn't work very well if the circle is filled AND his alpha < 100%)
				ctx.beginPath();
				ctx.arc(canvas.width/2, canvas.height/2, cs-2, 0, 2*Math.PI);
				ctx.stroke();
				ctx.arc(canvas.width/2, canvas.height/2, cs-2, 0, 2*Math.PI); // drawn 2 times to make the shadow similar to the "in/out" style
				ctx.stroke();
				ctx.closePath();
				// reset the line width & stroke style
				ctx.lineWidth = border_size;
				ctx.strokeStyle = gradient;
				// remove the shadow for the last circle (the final)
				ctx.shadowBlur = 0;
				ctx.shadowColor = "rgba(0,0,0,0)";
			}
			// real circle
			ctx.beginPath();
			if(border_size == 0){ // filled
				ctx.arc(canvas.width/2, canvas.height/2, cs-(border_size/2), 0, 2*Math.PI);
				ctx.fill();
			} else {
				ctx.arc(canvas.width/2, canvas.height/2, cs-(border_size/2), 0, 2*Math.PI);
				ctx.stroke();
			}
			ctx.closePath();
	}
	
	function draw_mode_icon(canvas_name, mode, icon_x_center, icon_y_center, icon_size, color) { // draw the game mode icon
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		ctx.strokeStyle = color;
		ctx.fillStyle = color;
		var icon_border_size = 0.2*icon_size;
		
		// ext border
		ctx.lineWidth = icon_border_size;
		ctx.lineCap = "round"
		ctx.beginPath();
		ctx.arc(icon_x_center, icon_y_center, icon_size-(icon_border_size/2), 0, 2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		
		switch(mode) {
			case "osu":
				ctx.beginPath();
				ctx.arc(icon_x_center, icon_y_center, icon_size-2*icon_border_size, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				break;
			case "fruits":
				ctx.beginPath();
				ctx.arc(icon_x_center-(icon_border_size*0.8), icon_y_center+(icon_size*(-0.3)), icon_border_size*0.8, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				ctx.beginPath();
				ctx.arc(icon_x_center+(icon_border_size*0.8), icon_y_center, icon_border_size*0.8, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				ctx.beginPath();
				ctx.arc(icon_x_center-(icon_border_size*0.8), icon_y_center+(icon_size*(+0.3)), icon_border_size*0.8, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				break;
			case "taiko":
				ctx.lineWidth = icon_border_size*1.2;
				ctx.beginPath();
				ctx.arc(icon_x_center, icon_y_center, icon_size-2*icon_border_size-ctx.lineWidth/2, 0, 2*Math.PI);
				ctx.stroke();
				ctx.closePath();
				ctx.beginPath();
				ctx.moveTo(icon_x_center, icon_y_center-icon_size/2+icon_border_size/2);
				ctx.lineTo(icon_x_center, icon_y_center+icon_size/2-icon_border_size/2);
				ctx.stroke();
				ctx.closePath();
				break;
			case "mania":
				ctx.beginPath(); // middle
				ctx.moveTo(icon_x_center, icon_y_center+(icon_size*(-0.48)));
				ctx.lineTo(icon_x_center, icon_y_center+(icon_size*(+0.48)));
				ctx.stroke();
				ctx.closePath();
				ctx.beginPath(); // left
				ctx.moveTo(icon_x_center-icon_border_size*1.75, icon_y_center+(icon_size*(-0.24)));
				ctx.lineTo(icon_x_center-icon_border_size*1.75, icon_y_center+(icon_size*(+0.24)));
				ctx.stroke();
				ctx.closePath();
				ctx.beginPath(); // right
				ctx.moveTo(icon_x_center+icon_border_size*1.75, icon_y_center+(icon_size*(-0.24)));
				ctx.lineTo(icon_x_center+icon_border_size*1.75, icon_y_center+(icon_size*(+0.24)));
				ctx.stroke();
				ctx.closePath();
				break;
		}
	}
	
	function draw_centered_text(canvas_name, text, font_settings, correction_y, color1, color2, shadow_style, shadow_blur, shadow_color) {
		/* Arguments:
		 1. canvas_name (str): name of the canvas
		 2. text (str): the text to draw
		 3. font_settings (str): literraly ctx.font(); (same than the CSS)
		 4. correction_y (int): the correction y of the text
		 5. color1 (color): "rgba(r, g, b, a)" for exemple (linear gradient 0° color1-color2)
		 6. color2 (color): "rgba(r, g, b, a)" for exemple
		 7. shadow_style (str): "none", "out", "in/out"
		 8. shadow_blur (int): shadow blur
		 9. shadow_color (color): "rgba(r, g, b, a)" for exemple
		*/
		
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		/* 1. define the gradient */
		var x1 = 0;
		var y1 = 0;
		var x2 = 0;
		var y2 = canvas.height;
		gradient = ctx.createLinearGradient(x1, y1, x2, y2);
		gradient.addColorStop(0, color1);
		gradient.addColorStop(1, color2);
				
		/* 2. define strokeStyle, fillStyle and lineWidth */
		ctx.lineWidth = 0;
		ctx.fillStyle = gradient;
		ctx.strokeStyle = "rgba(0,0,0,0)";
			
		/* 3. define the shadow */
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		switch(shadow_style){
			case "none":
				ctx.shadowBlur = 0;
				ctx.shadowColor = "rgba(0,0,0,0)";
				break;
			case "out":
				ctx.shadowBlur = shadow_blur;
				ctx.shadowColor = shadow_color;
				break;
			case "in/out":
				ctx.shadowBlur = shadow_blur;
				ctx.shadowColor = shadow_color;
				break;
		}
		
		// init ctx
		ctx.font = font_settings;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		
		// draw
		ctx.fillText(text, (canvas.width/2)+0, (canvas.height/2)+correction_y);
	}
	
	function draw_rounded_rect(canvas_name, x, y, w, h, radius, border_size, gradient_style, gradient_direction, color1, color2, shadow_style, shadow_blur, shadow_color) { /* draw a rounded rectangle */
		/* Arguments:
		  1. canvas_name (str): name of the canavs
	      2. x (int): X position of the top left corner
	      3. y (int): Y position of the top left corner.
		  4. w (int): width of the rect
		  5. h (int): height of the rect
		  6. radius (int): border radius
		  7. border_size (int): 0=filled circle ; n=size in px of the stroke
		  8. gradient_style (str): "none", "linear", "radial"
		  9. gradient_direction (int): direction of the linear gradient (0, 90, 180, 270 only !)
		 10. color1 (color): "rgba(r, g, b, a)" for exemple
		 11. color2 (color): "rgba(r, g, b, a)" for exemple
		 12. shadow_style (str): "none", "out", "in/out"
		 13. shadow_blur (int): shadow blur
		 14. shadow_color (color): "rgba(r, g, b, a)" for exemple
		*/
		
		/* 1. get canvas */		
	    var canvas = document.getElementById(canvas_name);
	    var ctx = canvas.getContext("2d");

		/* 2. define the gradient */
		switch(gradient_style){
			case "none":
				gradient = color1;
				break;
			case "linear":
				var x1, y1, x2, y2;
				switch(gradient_direction) {
					case 90:
						x1 = x;
						y1 = 0;
						x2 = x+w;
						y2 = 0;
						break;
					case 180:
						x1 = 0;
						y1 = y+h;
						x2 = 0
						y2 = y;
						break;
					case 270:
						x1 = x+w;
						y1 = 0;
						x2 = x;
						y2 = 0;
						break
					default: // 0 or something else
						x1 = 0;
						y1 = y;
						x2 = 0
						y2 = y+h;
						break;
				}
				gradient = ctx.createLinearGradient(x1, y1, x2, y2);
				gradient.addColorStop(0, color1);
				gradient.addColorStop(1, color2);
				break;
			case "radial":
				// color1 = center ; color2 = out
				if(canvas.width >= canvas.height) {
					gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, canvas.height/2);
				} else {
					gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, canvas.width/2);
				}
				gradient.addColorStop(0, color1);
				if(border_size != 0) { /* don't add this color stop for filled circles */
					gradient.addColorStop(1-(border_size/cs), color1);
				}
				gradient.addColorStop(1, color2);
				break;
		}
		
		/* 3. define strokeStyle, fillStyle and lineWidth */
		if(border_size != 0) { // border mode
			ctx.lineWidth = border_size;
			ctx.fillStyle = "rgba(0,0,0,0)";
			ctx.strokeStyle = gradient;
		} else { // fill mode
			ctx.lineWidth = 0;
			ctx.fillStyle = gradient;
			ctx.strokeStyle = "rgba(0,0,0,0)";
		}
		
		/* 4. define the shadow */
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		switch(shadow_style){
			case "none":
				ctx.shadowBlur = 0;
				ctx.shadowColor = "rgba(0,0,0,0)";
				break;
			case "out":
				ctx.shadowBlur = shadow_blur;
				ctx.shadowColor = shadow_color;
				break;
			case "in/out":
				ctx.shadowBlur = shadow_blur;
				ctx.shadowColor = shadow_color;
				break;
		}
		
		/* 5. draw */
		x = x + (border_size/2);
		y = y + (border_size/2);
		w = w - (border_size/2);
		h = h - (border_size/2);
		var r = x + w;
	    var b = y + h;

		ctx.beginPath();
		ctx.moveTo(x+radius, y);
		ctx.lineTo(r-radius, y);
		ctx.quadraticCurveTo(r, y, r, y+radius);
		ctx.lineTo(r, y+h-radius);
		ctx.quadraticCurveTo(r, b, r-radius, b);
		ctx.lineTo(x+radius, b);
		ctx.quadraticCurveTo(x, b, x, b-radius);
	 	ctx.lineTo(x, y+radius);
		ctx.quadraticCurveTo(x, y, x+radius, y);
		
	    if(border_size != 0) { // border mode
			ctx.stroke();
		} else {
			ctx.fill();
		}
	}
	
	/* elements */
	
	function generate_approachcircle() {
		draw_centered_circle(
			canvas_name, /* canvas */
			1, /* border size */
			234/2, /* circle radius */
			"none", /* gradient style */
			0, /* gradient direction */
			"rgba(0,0,0,1)", /* color 1 */
			"rgba(0,0,0,1)", /* color 2 */
			"in/out", /* shadow style */
			6, /* shadow blur */
			"rgba(0,0,0,1)" /* shadow color */
		);
		draw_centered_circle(
			canvas_name, /* canvas */
			8, /* border size */
			248/2, /* circle radius */
			"linear", /* gradient style */
			-15, /* gradient direction */
			"rgba(255,215,215,1)", /* color 1 */
			"rgba(215,255,255,1)", /* color 2 */
			"none", /* shadow style */
			0, /* shadow blur */
			"rgba(0,0,0,0)" /* shadow color */
		);
	}
	
	function generate_arrow_warning() {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		ctx.lineWidth = 32;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4;
		ctx.shadowColor = "#000000";
		ctx.strokeStyle = main_color;
		
		ctx.beginPath();
		ctx.moveTo(40, canvas.height/2);
		ctx.lineTo(canvas.width-40, canvas.height/2);
		ctx.moveTo(canvas.width-40-60, canvas.height/2-60);
		ctx.lineTo(canvas.width-40, canvas.height/2);
		ctx.lineTo(canvas.width-40-60, canvas.height/2+60);
		ctx.stroke();
		ctx.closePath();
	}
	
	function generate_button(part) {
		// part: left, middle, right
		var x;
		switch(part) {
			case "left":
				x = 0;
				break;
			case "middle":
				x = -canvas.width-1;
				break;
			case "right":
				x = -canvas.width-6/2;
				break;
		}
		
		// background
		draw_rounded_rect(
			canvas_name, /* canvas name */
			x, /* x */
			2, /* y */
			32, /* w */
			142, /* h */
			4, /* border radius */
			0, /* border_size */
			"linear", /* gradient_style */
			0, /* gradient_direction */
			"#222222", /* color1 */
			"#333333", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000", /* shadow_color */
		);
		// border
		draw_rounded_rect(
			canvas_name, /* canvas name */
			x, /* x */
			2, /* y */
			32, /* w */
			142, /* h */
			4, /* border radius */
			5, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			"#EEEEEE", /* color1 */
			"#EEEEEE", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000", /* shadow_color */
		);
	}
	
	function generate_combo_n(n) { /* generate a number n */
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var font = "84px "+font_normal;
		var correction_y = 8;
		
		// to get the ctx.measureText()
		ctx.font = font;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		
		// resize canvas
		canvas.width = ctx.measureText(n.toString()).width + 24;
		canvas.height = 102;
		
		// draw
		if("0123456789".indexOf(n) == -1) { // if n isn't a number
			draw_centered_text(
				canvas_name, /* canvas_name */
				n, /* text */
	 			font, /* font_settings */
				correction_y , /* correction_y */
				main_color, /* color1 */
				main_color, /* color2 */
				"in/out", /* shadow_style */
				3, /* shadow_blur */
				"rgba(0,0,0,1)", /* shadow_color */
			);
		} else {
			draw_centered_text(
				canvas_name, /* canvas_name */
				n, /* text */
	 			font, /* font_settings */
				correction_y , /* correction_y */
				"rgba(240,240,240,1)", /* color1 */
				"rgba(240,240,240,1)", /* color2 */
				"in/out", /* shadow_style */
				3, /* shadow_blur */
				"rgba(0,0,0,1)", /* shadow_color */
			);
		}
 	}
	
	function generate_count(value) {
		// get font settings
		var font_settings, correction_y, text;
		switch(value) {
			case "go":
				font_settings = "400px "+font_normal;
				correction_y = 40;
				text = "GO!";
				break;
			case "ready":
				font_settings = "300px "+font_normal;
				correction_y = 30;
				text = "Ready?";
				break;
			default: // 1 2 3
				font_settings = "420px "+font_normal;
				correction_y = 42;
				text = value;
				break;
		}
		
		draw_centered_text(
			canvas_name, /* canvas_name */
			text, /* text */
 			font_settings, /* font_settings */
			correction_y, /* correction_y */
			"rgba(240,240,240,1)", /* color1 */
			"rgba(200,200,200,1)", /* color2 */
			"in/out", /* shadow_style */
			4, /* shadow_blur */
			"rgba(10,10,10,1)", /* shadow_color */
		);
		
	}
	
	function generate_cursor() {
		const cursor_size = 66; // in px
		const border_size = 48;
		
		// get color
		var draw_cursor_color;
		if(cursor_color == 0) {
			draw_cursor_color = material[get_color_data(main_color_id)[0]][get_color_data(main_color_id)[1]];
		} else {
			if(get_color_data(main_color_id)[0]<16) {
				draw_cursor_color = material[(get_color_data(main_color_id)[0]+6)%16][get_color_data(main_color_id)[1]];
			} else {
				switch(get_color_data(main_color_id)[0]) {
					case 16: // brown
						draw_cursor_color = material[6][get_color_data(main_color_id)[1]];
						break;
					case 17: // gray
						draw_cursor_color = material[12][get_color_data(main_color_id)[1]];
						break;
					case 18: // blue gray
						draw_cursor_color = material[1][get_color_data(main_color_id)[1]];
						break;
				}
			}
		}
		
		// border and glow
		draw_centered_circle(
			canvas_name, /* canvas */
			border_size, /* border size */
			cursor_size/2, /* circle radius */
			"none", /* gradient style */
			0, /* gradient direction */
			add_color(draw_cursor_color+"ff", "#FFFFFF33"), /* color 1 */
			add_color(draw_cursor_color+"ff", "#FFFFFF33"), /* color 2 */
			"in/out", /* shadow style */
			28, /* shadow blur */
			add_color(draw_cursor_color+"ff", "#FFFFFF33") /* shadow color */
		);
		
		// centered white circle
		draw_centered_circle(
			canvas_name, /* canvas */
			0, /* border size */
			(cursor_size-(border_size)/2)/2, /* circle radius */
			"none", /* gradient style */
			0, /* gradient direction */
			"#FFFFFF", /* color 1 */
			"#FFFFFF", /* color 2 */
			"in/out", /* shadow style */
			5, /* shadow blur */
			"#FFFFFF" /* shadow color */
		);
	}
	
	function generate_cursortrail() {
		const cursortrail_size = 58;
		
		// get color
		var draw_cursor_color;
		if(cursor_color == 0) {
			draw_cursor_color = material[get_color_data(main_color_id)[0]][get_color_data(main_color_id)[1]];
		} else {
			if(get_color_data(main_color_id)[0]<16) {
				draw_cursor_color = material[(get_color_data(main_color_id)[0]+6)%16][get_color_data(main_color_id)[1]];
			} else {
				switch(get_color_data(main_color_id)[0]) {
					case 16: // brown
						draw_cursor_color = material[6][get_color_data(main_color_id)[1]];
						break;
					case 17: // gray
						draw_cursor_color = material[12][get_color_data(main_color_id)[1]];
						break;
					case 18: // blue gray
						draw_cursor_color = material[1][get_color_data(main_color_id)[1]];
						break;
				}
			}
		}
		
		if(cursor_trail == 1) { // if cursor trail enabled
			// central circle
			draw_centered_circle(
				canvas_name, /* canvas */
				0, /* border size */
				cursortrail_size/2/2, /* circle radius */
				"radial", /* gradient style */
				0, /* gradient direction */
				draw_cursor_color+"FF", /* color 1 */
				draw_cursor_color+"CC", /* color 2 */
				"none", /* shadow style */
				32, /* shadow blur */
				draw_cursor_color+"FF" /* shadow color */
			);
			
			// border
			draw_centered_circle(
				canvas_name, /* canvas */
				cursortrail_size/2/2, /* border size */
				cursortrail_size/2, /* circle radius */
				"radial", /* gradient style */
				0, /* gradient direction */
				draw_cursor_color+"CC", /* color 1 */
				draw_cursor_color+"00", /* color 2 */
				"none", /* shadow style */
				16, /* shadow blur */
				draw_cursor_color+"FF" /* shadow color */
			);
		}
	}
	
	function generate_fail_background() {
		// almost a copypasta from generate_pause_overlay()
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var gradient;
		
		/* colored bar under the title */
		ctx.fillStyle = "#f44336"; // red 500 normal
		ctx.rect(0,260,canvas.width,9);
		ctx.fill();
		
		/* pause text */
		gradient = ctx.createLinearGradient(0,50,0,200);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, "rgba(210,210,210,1)");
		ctx.fillStyle = gradient;
		
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4;
		ctx.shadowColor = "#000000";
		
		ctx.font = "130px "+font_normal;
		ctx.textAlign = "center";
		
		// draw
		ctx.fillText("FAILED", (canvas.width/2)+0, 180);
	}
	
	function generate_default_n(n) { /* generate a number n */
		var canvas = document.getElementById(canvas_name);
		
		// resize the canvas
		canvas.width = 90;
		canvas.height = 120;
		
		draw_centered_text(
			canvas_name, /* canvas_name */
			n, /* text */
 			"102px "+font_normal, /* font_settings */
			9, /* correction_y */
			"rgba(240,240,240)", /* color1 */
			"rgba(240,240,240)", /* color2 */
			"in/out", /* shadow_style */
			2, /* shadow_blur */
			"rgba(10,10,10,0.8)", /* shadow_color */
		);
	}
	
	function generate_followpoint(frame_number) {
		const frames = 16; // the amount of frames
		const transparant_frames = 3; // the amount of transparant frames at the beginning or at the end
		const followpoint_size = 6;
		const followpoint_color = [160,160,160]; // the color of the followpoint (r,g,b)
		const alpha_incr = 1/3; // how the alpha is increased every frame since the first visible follow point (max is 1)
		const max_alpha = 0.9; // the max alpha of a follow point
		var canvas, ctx, gradient, alpha;
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		// draw
		if(!(frame_number<transparant_frames || frame_number>(frames-transparant_frames-1))) { // if this is NOT a blank canvas
			// get alpha
			if(frame_number <= (frames/2)) {
				alpha = (frame_number-transparant_frames+1) * alpha_incr;
			} else {
				alpha = (frames-transparant_frames-frame_number) * alpha_incr;
			}
			if(alpha > 1) { alpha = 1; } // max alpha = 1
			// create gradient
			gradient = ctx.createLinearGradient(20, 0, canvas.width-20, 0);
			gradient.addColorStop(0.00, "rgba("+followpoint_color[0].toString()+","+followpoint_color[1].toString()+","+followpoint_color[2].toString()+","+(max_alpha*(0)*alpha).toString()+")");
			gradient.addColorStop(0.25, "rgba("+followpoint_color[0].toString()+","+followpoint_color[1].toString()+","+followpoint_color[2].toString()+","+(max_alpha*(2/3)*alpha).toString()+")");
			gradient.addColorStop(0.50, "rgba("+followpoint_color[0].toString()+","+followpoint_color[1].toString()+","+followpoint_color[2].toString()+","+(max_alpha*(1)*alpha).toString()+")");
			gradient.addColorStop(0.75, "rgba("+followpoint_color[0].toString()+","+followpoint_color[1].toString()+","+followpoint_color[2].toString()+","+(max_alpha*(2/3)*alpha).toString()+")");
			gradient.addColorStop(1.00, "rgba("+followpoint_color[0].toString()+","+followpoint_color[1].toString()+","+followpoint_color[2].toString()+","+(max_alpha*(0)*alpha).toString()+")");
			ctx.fillStyle = gradient;
			// create shadow
			ctx.shadowBlur = 2;
			ctx.shadowColor = "rgba(90,90,90,"+(0.9*alpha).toString()+")";
			// draw
			ctx.rect(20, (canvas.height-followpoint_size)/2, canvas.width-20, followpoint_size);
			ctx.fill();
		}	
	}
	
	function generate_grade_letter(letter){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var letter_y = 72; // y position of the text
		var letter_color, gradient;
		
		/* get color */
		switch(letter) {
			case "A":
				letter_color = color_A;
				break;
			case "B":
				letter_color = color_B;
				break;
			case "C":
				letter_color = color_C;
				break;
			case "D":
				letter_color = color_D;
				break;
			case "S":
				letter_color = color_S;
				break;
			case "SH":
				letter_color = color_SH;
				break;
			case "SS": // SS
				letter_color = color_SS;
				break;
			case "SSH":
				letter_color = color_SSH;
				break;
		}
		
		/* set color and shadow */
		gradient = ctx.createLinearGradient(0,0,0,600);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, add_color("#FFFFFFFF", letter_color+"33"));
		ctx.fillStyle = gradient;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 18;
		ctx.shadowColor = letter_color;
		
		/* set font */
		ctx.font = "600px "+font_bold;
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		
		/* draw */
		switch(letter) {
			case "SH": // silver S
				ctx.fillText("S", (canvas.width/2)+0, letter_y);
				break;
			case "SS": // normal SS
				ctx.fillText("S", canvas.width/2-80, letter_y/2);
				ctx.fillText("S", canvas.width/2+80, letter_y*1.5);
				break;
			case "SSH": // silver SS
				ctx.fillText("S", canvas.width/2-80, letter_y/2);
				ctx.fillText("S", canvas.width/2+80, letter_y*1.5);
				break;
			default: // normal S A B C D
				ctx.fillText(letter, (canvas.width/2)+0, letter_y);
				break;
		}
	}
	
	function generate_grade_letter_small(letter){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var correction_y = 4; // corrects the y position of the text
		var letter_color, gradient;
		
		/* get color */
		switch(letter) {
			case "A":
				letter_color = color_A;
				break;
			case "B":
				letter_color = color_B;
				break;
			case "C":
				letter_color = color_C;
				break;
			case "D":
				letter_color = color_D;
				break;
			case "S":
				letter_color = color_S;
				break;
			case "SH":
				letter_color = color_SH;
				break;
			case "SS": // SS
				letter_color = color_SS;
				break;
			case "SSH":
				letter_color = color_SSH;
				break;
		}
		
		/* set color and shadow */
		gradient = ctx.createLinearGradient(0,0,0,canvas.height);
		gradient.addColorStop(0, add_color("#FFFFFFFF", letter_color+"22"));
		gradient.addColorStop(1, add_color("#FFFFFFFF", letter_color+"66"));
		ctx.fillStyle = gradient;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 3;
		ctx.shadowColor = letter_color;
		
		/* set font */
		ctx.font = "72px "+font_bold;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		
		/* draw */
		switch(letter) {
			case "SH": // silver S
				ctx.fillText("S", (canvas.width/2)+0, canvas.height/2+correction_y);
				break;
			case "SS": // normal SS
				ctx.fillText("S", canvas.width/2-10, canvas.height/2+correction_y-5);
				ctx.fillText("S", canvas.width/2+10, canvas.height/2+correction_y+5);
				break;
			case "SSH": // silver SS
				ctx.fillText("S", canvas.width/2-10, canvas.height/2+correction_y-5);
				ctx.fillText("S", canvas.width/2+10, canvas.height/2+correction_y+5);
				break;
			default: // normal S A B C D
				ctx.fillText(letter, (canvas.width/2)+0, canvas.height/2+correction_y);
				break;
		}
	}
	
	function generate_hitburst_ingame(number) {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		switch(number) {
			case "0": // miss
				const x_size = 62;
				const border_size = 12;
				ctx.strokeStyle = "#ef5350";  // 400 normal
				ctx.lineWidth = border_size;
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 8;
				ctx.shadowColor = "#f44336"; // 500 normal
				ctx.beginPath();
				ctx.moveTo((canvas.width-x_size)/2, (canvas.width-x_size)/2);
				ctx.lineTo((canvas.width+x_size)/2, (canvas.width+x_size)/2);
				ctx.moveTo((canvas.width+x_size)/2, (canvas.width-x_size)/2);
				ctx.lineTo((canvas.width-x_size)/2, (canvas.width+x_size)/2);
				ctx.stroke();
				ctx.closePath()
				break;
			default:
				// init ctx
				ctx.font = "56px "+font_normal;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.lineWidth = 0;
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 6;
				// color
				if(number == "50") { // 50
					ctx.fillStyle = add_color(main_color+"FF", "#FFFFFF88");
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
				} else { // 100
					ctx.fillStyle = add_color(main_color+"FF", "#FFFFFFCC");
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
				}
				// draw
				ctx.fillText(number, (canvas.width/2)+0, (canvas.height/2)-55);
				break;
			
		}
	}
	
	function generate_hitburst_ranking(text) {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		if(text == "0") { // X
			const x_size = 62*1.5;
			const border_size = 12*1.5;
			ctx.strokeStyle = "#ef5350";  // 400 normal
			ctx.lineWidth = border_size;
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 8;
			ctx.shadowColor = "#f44336"; // 500 normal
			ctx.beginPath();
			ctx.moveTo((canvas.width-x_size)/2, (canvas.width-x_size)/2);
			ctx.lineTo((canvas.width+x_size)/2, (canvas.width+x_size)/2);
			ctx.moveTo((canvas.width+x_size)/2, (canvas.width-x_size)/2);
			ctx.lineTo((canvas.width-x_size)/2, (canvas.width+x_size)/2);
			ctx.stroke();
			ctx.closePath()
		} else { // number
			// init ctx
			ctx.font = "100px "+font_normal;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.lineWidth = 0;
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 6;
			
			// create the color
			switch(text) {
				case "50":
					ctx.fillStyle = add_color(main_color+"FF", "#FFFFFF88");
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
					break;
				case "100":
					ctx.fillStyle = add_color(main_color+"FF", "#FFFFFFCC");
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
					break;
				case "100k":
					ctx.fillStyle = add_color(main_color+"FF", "#FFFFFFCC");
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
					break;
				case "300":
					ctx.fillStyle = "#FFFFFF";
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
					break;
				case "300g":
					ctx.fillStyle = "#FFFFFF";
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
					break;
				case "300k":
					ctx.fillStyle = "#FFFFFF";
					ctx.shadowColor = add_color(main_color+"FF", "#FFFFFF66");
					break;
			}
			
			// draw
			ctx.fillText(text, (canvas.width/2)+0, (canvas.height/2)+11);
		}
	}
	
	function generate_hitcircle() {
		const circle_diameter = 234; // in px in @2x
		
		/* draw the circle */
		switch(circle_type) {
			case 0: // transparent
				draw_centered_circle(
					canvas_name, /* canvas */
					0, /* border size */
					circle_diameter/2-1, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(0,0,0,0.1)", /* color 1 */
					"rgba(0,0,0,0.1)", /* color 2 */
					"none", /* shadow style */
					0, /* shadow blur */
					"rgba(0,0,0,0)" /* shadow color */
				);
				break;
			case 1: // plain
				draw_centered_circle(
					canvas_name, /* canvas */
					0, /* border size */
					circle_diameter/2-1, /* circle radius */
					"linear", /* gradient style */
					0, /* gradient direction */
					"rgba(110,110,110,0.65)", /* color 1 */
					"rgba(150,150,150,0.65)", /* color 2 */
					"none", /* shadow style */
					0, /* shadow blur */
					"rgba(0,0,0,0)" /* shadow color */
				);
				break;
			case 2: // ringed
				// background
				draw_centered_circle(
					canvas_name, /* canvas */
					0, /* border size */
					circle_diameter/2-1, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(64,64,64,0.65)", /* color 1 */
					"rgba(64,64,64,0.65)", /* color 2 */
					"none", /* shadow style */
					0, /* shadow blur */
					"rgba(0,0,0,0)" /* shadow color */
				);
				// ring
				draw_centered_circle(
					canvas_name, /* canvas */
					15, /* border size */
					(circle_diameter-40)/2, /* circle radius */
					"linear", /* gradient style */
					-15, /* gradient direction */
					"rgba(245,205,205,1)", /* color 1 */
					"rgba(205,245,245,1)", /* color 2 */
					"none", /* shadow style */
					0, /* shadow blur */
					"rgba(0,0,0,0)" /* shadow color */
				);
				break;
			case 3: // colored border
				// background
				draw_centered_circle(
					canvas_name, /* canvas */
					0, /* border size */
					circle_diameter/2-1, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(0,0,0,0.2)", /* color 1 */
					"rgba(0,0,0,0.2)", /* color 2 */
					"none", /* shadow style */
					0, /* shadow blur */
					"rgba(0,0,0,0)" /* shadow color */
				);
				// ring (used as border)
				draw_centered_circle(
					canvas_name, /* canvas */
					15, /* border size */
					circle_diameter/2, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"in/out", /* shadow style */
					6, /* shadow blur */
					"rgba(0,0,0,1)" /* shadow color */
				);
				break;
		}
	}
	
	function generate_hitcircleoverlay() {
		const circle_diameter = 234; // in px in @2x
		
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		
		/* draw the circle */
		switch(circle_type) {
			case 0: // transparent
				draw_centered_circle(
					canvas_name, /* canvas */
					15, /* border size */
					circle_diameter/2, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"out", /* shadow style */
					6, /* shadow blur */
					"rgba(0,0,0,1)" /* shadow color */
				);
				break;
			case 1: // plain
				// 3d effect
				var glass_gradient = ctx.createRadialGradient(canvas.width/2, -1.5*canvas.height, 5, canvas.width/2, -1.5*canvas.height, 2*canvas.height);
				glass_gradient.addColorStop(0, "rgba(50,50,50,0)");
				glass_gradient.addColorStop(0.6, "rgba(50,50,50,0)");
				glass_gradient.addColorStop(0.999, "rgba(255,255,255,0.06)");
				glass_gradient.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = glass_gradient;
				ctx.beginPath();
				ctx.arc(canvas.width/2, canvas.height/2, circle_diameter/2, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				// circle
				draw_centered_circle(
					canvas_name, /* canvas */
					15, /* border size */
					circle_diameter/2, /* circle radius */
					"linear", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"in/out", /* shadow style */
					6, /* shadow blur */
					"rgba(0,0,0,1)" /* shadow color */
				);
				break;
			case 2: // ringed
				// 3d effect
				var glass_gradient = ctx.createRadialGradient(canvas.width/2, -1.5*canvas.height, 5, canvas.width/2, -1.5*canvas.height, 2*canvas.height);
				glass_gradient.addColorStop(0, "rgba(50,50,50,0)");
				glass_gradient.addColorStop(0.6, "rgba(50,50,50,0)");
				glass_gradient.addColorStop(0.999, "rgba(255,255,255,0.06)");
				glass_gradient.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = glass_gradient;
				ctx.beginPath();
				ctx.arc(canvas.width/2, canvas.height/2, circle_diameter/2, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				// circle
				draw_centered_circle(
					canvas_name, /* canvas */
					15, /* border size */
					circle_diameter/2, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"out", /* shadow style */
					6, /* shadow blur */
					"rgba(0,0,0,1)" /* shadow color */
				);
				break;
			case 3: // colored border
				draw_centered_circle(
					canvas_name, /* canvas */
					15, /* border size */
					circle_diameter/2, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,0.08)", /* color 1 */
					"rgba(255,255,255,0.08)", /* color 2 */
					"none", /* shadow style */
					0, /* shadow blur */
					"rgba(0,0,0,0)" /* shadow color */
				);
				break;
		}
	}
	
	function generate_inputoverlay_background() {
		var canvas_temp = document.getElementById("canvas_temp");
		var ctx = canvas_temp.getContext("2d");
		const key_size = 68;
		const key_border_radius = 6;
		// resize the temp canvas
		canvas_temp.width = 408;
		canvas_temp.height = 100;
	    ctx.strokeStyle = "#FF0000";
	    ctx.lineWidth = 4;

		// draw in the temp canvas
		// background
		draw_rounded_rect(
			"canvas_temp", /* canvas name */
			4+1, /* x */
			2+1, /* y */
			398-1, /* w */
			92-1, /* h */
			key_border_radius+2, /* border radius */
			0, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			add_color("#00000060", main_color+"20"), /* color1 */
			"rgba(0,0,0,0.5)", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000" /* shadow_color */
		);
		// border
		draw_rounded_rect(
			"canvas_temp", /* canvas name */
			4, /* x */
			2, /* y */
			398, /* w */
			92, /* h */
			key_border_radius+2, /* border radius */
			3, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			main_color, /* color1 */
			main_color, /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000" /* shadow_color */
		);
		// keys
		var x_positions = [28, 122, 217, 311];
		for(var i=0 ; i<4 ; i++) {
			draw_rounded_rect(
				"canvas_temp", /* canvas name */
				x_positions[i], /* x */
				48-((key_size-2)/2), /* y */
				key_size-2, /* w */
				key_size-2, /* h */
				key_border_radius, /* border radius */
				0, /* border_size */
				"none", /* gradient_style */
				0, /* gradient_direction */
				main_color, /* color1 */
				main_color, /* color2 */
				"in/out", /* shadow_style */
				2, /* shadow_blur */
				main_color /* shadow_color */
			);
		}
		
		// put him in the real canvas
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		canvas.width = canvas_temp.width*(1/1.05);
		canvas.height = canvas_temp.height;
		ctx.drawImage(document.getElementById("canvas_temp"), 0, 0, canvas.width, canvas.height);
	}
	
	
	
	function generate_inputoverlay_key() {
		const key_size = 68;
		const key_border_radius = 6;
		draw_rounded_rect(
			canvas_name, /* canvas name */
			(canvas.width-key_size)/2, /* x */
			(canvas.width-key_size)/2, /* y */
			key_size, /* w */
			key_size, /* h */
			key_border_radius, /* border radius */
			0, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			"#000000", /* color1 */
			"#000000", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000", /* shadow_color */
		);
	}
	
	function generate_lighting() {
		const lighting_size = 92;
		// get canvas
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext('2d');
		// get color gradient
		var gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, lighting_size);
		gradient.addColorStop(0, "rgba(128,128,128,0.7)");
		gradient.addColorStop(0.3, "rgba(128,128,128,0.6)");
		gradient.addColorStop(1, "rgba(128,128,128,0)");
		ctx.fillStyle = gradient;
		// disable shadow
		ctx.shadowBlur = 0;
		// draw
		ctx.beginPath();
		ctx.arc(canvas.width/2, canvas.height/2, lighting_size, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
	
	function generate_mod_icon(mod) {
		var nerf_color = "#76ff03"; // lightGreen A400 normal
		var buff_color = "#ff1744"; // red A400 normal
		var other_color = "#2979ff"; // blue A400 normal
		
		const nerf_mods = ["EZ","HT","NF"];
		const buff_mods = ["HR","SD","PF","DT","NC","HD","FI","FL"]
		// the rest are in the 'other' category
		
		var border_size = 6;
		var border_radius = 18;
		
		/* get border color */
		var color;
		if(nerf_mods.indexOf(mod) != -1) { // nerf mod
			color = nerf_color;
		} else {
			if(buff_mods.indexOf(mod) != -1) { // buff mod
				color = buff_color;
			} else {
				color = other_color;
			}
		}
		
		/* background */
		draw_rounded_rect(
			canvas_name, /* canvas name */
			2, /* x */
			2, /* y */
			canvas.width-4, /* w */
			canvas.height-4, /* h */
			20, /* border radius */
			0, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			"rgba(0,0,0,0.7)", /* color1 */
			"rgba(0,0,0,0.7)", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000" /* shadow_color */
		);
		
		/* border */
		draw_rounded_rect(
			canvas_name, /* canvas name */
			1, /* x */
			1, /* y */
			canvas.width-2-border_size/2, /* w */
			canvas.height-2-border_size/2, /* h */
			border_radius, /* border radius */
			border_size, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			color, /* color1 */
			"rgba(0,0,0,0.5)", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"#00000000" /* shadow_color */
		);
		
		/* text */
		draw_centered_text(
			canvas_name, /* canvas_name */
			mod, /* text */
 			"64px "+font_normal, /* font_settings */
			6, /* correction_y */
			"rgba(255,255,255)", /* color1 */
			"rgba(255,255,255)", /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"rgba(10,10,10,0.8)", /* shadow_color */
		);
	}
	
	function generate_menu_back() {
		// get canvas
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext('2d');
		
		var gradient;
		
		/* background */
		ctx.fillStyle = "#000000";
		ctx.shadowBlur = 0;
		ctx.beginPath();
		ctx.rect(0, 0.5, canvas.width, canvas.height);
		ctx.fill();
		ctx.closePath();
		
		/* the bar at the top */
		ctx.fillStyle = main_color;
		ctx.beginPath();
		ctx.rect(0, 0.5, canvas.width, 5);
		ctx.fill();
		ctx.closePath();
		
		/* arrow */
		ctx.lineWidth = 12;
		ctx.strokeStyle = main_color;
		ctx.lineCap = "butt";
		ctx.beginPath();
		ctx.moveTo(68+16, 6+(180-6)/2-32);
		ctx.lineTo(68-16, 6+(180-6)/2+0);
		ctx.lineTo(68+16, 6+(180-6)/2+32);
		ctx.stroke();
		ctx.closePath();
		ctx.lineWidth = 8;
		ctx.beginPath();
		ctx.moveTo(92+12, 6+(180-6)/2-24);
		ctx.lineTo(92-12, 6+(180-6)/2+0);
		ctx.lineTo(92+12, 6+(180-6)/2+24);
		ctx.stroke();
		ctx.closePath();
		
		/* 'back' text */
		x1 = 0;
		y1 = 0;
		x2 = 0;
		y2 = canvas.height;
		gradient = ctx.createLinearGradient(x1, y1, x2, y2);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, "rgba(240,240,240,1)");
		ctx.font = "76px "+font_normal;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillStyle = gradient;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4;
		ctx.shadowColor = "rgba(0,0,0,0.8)";
		ctx.fillText("back", 148, 6+(180-6)/2+9);
	}
	
	function generate_menu_button_background() {
		draw_rounded_rect(
			canvas_name, /* canvas name */
			12, /* x */
			10, /* y */
			1400-12, /* w */
			194-10, /* h */
			6, /* border radius */
			0, /* border_size */
			"linear", /* gradient_style */
			0, /* gradient_direction */
			"rgba(30,30,30,0.7)", /* color1 */
			"rgba(50,50,50,0.7)", /* color2 */
			"in/out", /* shadow_style */
			4, /* shadow_blur */
			"#000000" /* shadow_color */
		);
	}
	
	function generate_mode_m(mode) {
		var canvas = document.getElementById(canvas_name);
		draw_mode_icon(canvas_name, mode, canvas.width/2, canvas.height/2, (canvas.width-30)/2, "#FFFFFF");
	}
	
	function generate_mode_m_med(mode) {
		var canvas = document.getElementById(canvas_name);
		draw_mode_icon(canvas_name, mode, canvas.width/2, canvas.height/2, (canvas.width-30)/2, "#FFFFFF");
	}
	
	function generate_mode_m_small(mode) {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		/* bar at the left */
		ctx.strokeStyle = "#FFFFFF";
		ctx.lineWidth = 9; // same than the top line at generate_selection_mode_button()
		ctx.beginPath();
		ctx.moveTo(1355,318);
		ctx.lineTo(2212,318);
		ctx.stroke();
		ctx.closePath();
		
		/* icon */
		draw_mode_icon(canvas_name, mode, 2204, 1452, 42, "#FFFFFF");
	}
	
	function generate_play_skip() {
		/* 'skip' text */
		x1 = 0;
		y1 = 0;
		x2 = 0;
		y2 = canvas.height;
		gradient = ctx.createLinearGradient(x1, y1, x2, y2);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, "rgba(240,240,240,1)");
		ctx.font = "120px "+font_normal;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = gradient;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4;
		ctx.shadowColor = "rgba(0,0,0,0.8)";
		ctx.fillText("Skip", (canvas.width+100)/2, canvas.height/2);
		
		/* colored bar at the bottom */
		ctx.fillStyle = main_color;
		ctx.rect(100, canvas.height-40, canvas.width-100, 12);
		ctx.fill();
	}
	
	function generate_ranking_graph() {
		// background
		draw_rounded_rect(
			canvas_name, /* canvas name */
			6+1, /* x */
			6+1, /* y */
			618-2, /* w */
			298-2, /* h */
			6, /* border radius */
			0, /* border_size */
			"linear", /* gradient_style */
			0, /* gradient_direction */
			add_color(main_color+"80", "#00000080"), /* color1 */
			add_color(main_color+"90", "#00000070"), /* color2 */
			"in/out", /* shadow_style */
			3, /* shadow_blur */
			"rgba(0,0,0,1)" /* shadow_color */
		);
		
		// border
		draw_rounded_rect(
			canvas_name, /* canvas name */
			6, /* x */
			6, /* y */
			618, /* w */
			298, /* h */
			6, /* border radius */
			4, /* border_size */
			"none", /* gradient_style */
			6, /* gradient_direction */
			add_color(main_color+"FF", "#FFFFFF80"), /* color1 */
			add_color(main_color+"FF", "#FFFFFF80"), /* color2 */
			"in/out", /* shadow_style */
			3, /* shadow_blur */
			"rgba(0,0,0,1)" /* shadow_color */
		);
		
		/* max combo & accuracy text */
		ctx.font = "20px "+font_normal;
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillStyle = add_color(main_color+"60", "#FFFFFF60");
		ctx.fillText("Performance", 14, 18);
		ctx.fillText("Time", 566, 277);
	}
	
	function generate_ranking_panel() {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		var gradient; // used for gradient of shapes
		
		/* background (small dark gradient) */
		gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
		gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
		gradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");
		ctx.fillStyle = gradient;
		ctx.beginPath();
		ctx.rect(0, 0, canvas.width, canvas.height);
		ctx.fill();
		ctx.closePath();
		
		/* score background */
		draw_rounded_rect(
			canvas_name, /* canvas name */
			25, /* x */
			13, /* y */
			1256-25, /* w */
			165, /* h */
			6, /* border radius */
			0, /* border_size */
			"none", /* gradient_style */
			0, /* gradient_direction */
			add_color(main_color+"FF","#000000D0"), /* color1 */
			"rgba(32,32,32,1)", /* color2 */
			"in/out", /* shadow_style */
			3, /* shadow_blur */
			"rgba(0,0,0,1)" /* shadow_color */
		);
		
		/* details + combo + accuracy background */
		draw_rounded_rect(
			canvas_name, /* canvas name */
			25, /* x */
			200, /* y */
			1256-25, /* w */
			790, /* h */
			6, /* border radius */
			0, /* border_size */
			"linear", /* gradient_style */
			0, /* gradient_direction */
			add_color(main_color+"FF","#000000D0"), /* color1 */
			add_color(main_color+"FF","#000000A5"), /* color2 */
			"in/out", /* shadow_style */
			3, /* shadow_blur */
			"rgba(0,0,0,1)" /* shadow_color */
		);
		
		ctx.shadowBlur = 0;
		
		/* line separator */
		ctx.strokeStyle = "rgba(255,255,255,0.2)";
		ctx.lineWidth = 4;
		ctx.beginPath();
		ctx.moveTo(25+40, 773);
		ctx.lineTo(1256-25-40, 773);
		ctx.stroke();
		ctx.closePath();
		
		/* score text */
		ctx.font = "36px "+font_normal;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillStyle = main_color;
		ctx.fillText("Score", 44, 100);
		
		/* max combo & accuracy text */
		ctx.font = "36px "+font_normal;
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillStyle = add_color(main_color+"FF", "#FFFFFF80");
		ctx.fillText("Max combo", 52, 808);
		ctx.fillText("Accuracy", 630, 808);
	}
	
	function generate_ranking_perfect() {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var gradient;
		
		ctx.font = "72px "+font_normal;
		ctx.textAlign = "left";
		ctx.textBaseline = "bottom";
		
		gradient = ctx.createLinearGradient(0,canvas.height-26,0,canvas.height-126);
		gradient.addColorStop(0, add_color("#FFFFFFFF", main_color+"33"));
		gradient.addColorStop(1, "rgba(255,255,255,1)");
		ctx.fillStyle = gradient;
		
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4;
		ctx.shadowColor = main_color;
		
		ctx.fillText("Perfect!", 22, canvas.height-26);
	}
	
	function generate_ranking_title() {
		// get gradient
		x1 = 0;
		y1 = 0;
		x2 = 0;
		y2 = canvas.height;
		gradient = ctx.createLinearGradient(x1, y1, x2, y2);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, "rgba(240,240,240,1)");
		
		// init ctx
		ctx.font = "128px "+font_normal;
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		ctx.fillStyle = gradient;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4
		ctx.shadowColor = "rgba(0,0,0,0.8)";
		
		// draw
		ctx.fillText("Results", canvas.width/2, canvas.height/2-48); // pos at top left corner
	}
	
	function generate_reversearrow(){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		// slider end:
		// draw_centered_circle(canvas_name,15,234/2,"none",0,"rgba(255,255,255,0.3)","rgba(255,255,255,0.3)","none",6,"rgba(0,0,0,1)");
		
		// set shadow
		ctx.shadowBlur = 6;
		ctx.shadowColor = "#EEEEEE";
		
		// arrow left
		ctx.beginPath();
		ctx.lineWidth = 14;
		ctx.strokeStyle = "#EEEEEE";
		ctx.lineCap = "butt";
		ctx.moveTo(canvas.width/2-20-22, canvas.height/2-40);
		ctx.lineTo(canvas.width/2+20-22, canvas.height/2+0);
		ctx.lineTo(canvas.width/2-20-22, canvas.height/2+40);
		ctx.stroke();
		ctx.closePath();
		
		// arrow right
		ctx.beginPath();
		ctx.lineWidth = 15;
		ctx.strokeStyle = "#FFFFFF";
		ctx.lineCap = "butt";
		ctx.moveTo(canvas.width/2-20+22, canvas.height/2-40);
		ctx.lineTo(canvas.width/2+20+22, canvas.height/2+0);
		ctx.lineTo(canvas.width/2-20+22, canvas.height/2+40);
		ctx.stroke();
		ctx.closePath();
	}
	
	function generate_pause_button(text) {
		draw_centered_text(
			canvas_name, /* canvas_name */
			text, /* text */
	 		"100px "+font_normal, /* font_settings */
			10, /* correction_y */
			"rgba(255,255,255,1)", /* color1 */
			"rgba(215,215,215,1)", /* color2 */
			"in/out", /* shadow_style */
			3, /* shadow_blur */
			"rgba(0,0,0,1)", /* shadow_color */
		);
	}
	
	function generate_pause_overlay() {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var gradient;
		
		/* colored bar under the title */
		ctx.fillStyle = main_color; // red 500 normal
		ctx.rect(0,260,canvas.width,10);
		ctx.fill();
		
		/* pause text */
		gradient = ctx.createLinearGradient(0,50,0,200);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, "rgba(210,210,210,1)");
		ctx.fillStyle = gradient;
		
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4;
		ctx.shadowColor = "#000000";
		
		ctx.font = "130px "+font_normal;
		ctx.textAlign = "center";
		
		// draw
		ctx.fillText("PAUSED", (canvas.width/2)+0, 180);
	}
	
	function generate_score_n(n) { /* generate a number n */
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var font = "78px "+font_normal;
		var correction_y = 7;
		
		// to get the ctx.measureText()
		ctx.font = font;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		
		// draw
		if("0123456789".indexOf(n) == -1) { // if n isn't a number
			// resize canvas
			canvas.width = ctx.measureText(n.toString()).width + 14;
			canvas.height = 92;
			// draw
			draw_centered_text(
				canvas_name, /* canvas_name */
				n, /* text */
	 			font, /* font_settings */
				correction_y , /* correction_y */
				main_color, /* color1 */
				main_color, /* color2 */
				"in/out", /* shadow_style */
				2, /* shadow_blur */
				"rgba(0,0,0,1)", /* shadow_color */
			);
		} else {
			// resize canvas
			canvas.width = 68;
			canvas.height = 92;
			// draw
			draw_centered_text(
				canvas_name, /* canvas_name */
				n, /* text */
	 			font, /* font_settings */
				correction_y , /* correction_y */
				"rgba(240,240,240,1)", /* color1 */
				"rgba(240,240,240,1)", /* color2 */
				"in/out", /* shadow_style */
				2, /* shadow_blur */
				"rgba(0,0,0,1)", /* shadow_color */
			);
		}
 	}
	
	function generate_scorebar_bg(){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var x1, x2, y1, y2; // for gradients
		
		switch(scorebar_type) {
			case 0:
				var bar_x = 84;
				var bar_y = 37;
				var bar_width = 1000;
				var bar_height = 20;
				
				/* HP text */
				// get gradient
				x1 = 0;
				y1 = 0;
				x2 = 0;
				y2 = canvas.height;
				gradient = ctx.createLinearGradient(x1, y1, x2, y2);
				gradient.addColorStop(0, "rgba(255,255,255,1)");
				gradient.addColorStop(1, "rgba(240,240,240,1)");
				
				// init ctx
				ctx.font = "36px "+font_normal;
				ctx.textAlign = "left";
				ctx.textBaseline = "top"; // 
				ctx.fillStyle = gradient;
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 4;
				ctx.shadowColor = "rgba(0,0,0,0.8)";
				
				// draw
				ctx.fillText("HP", 18, 30); // pos at top left corner
				
				/* bar */
				draw_rounded_rect(
					canvas_name, /* canvas name */
					bar_x, /* x */
					bar_y, /* y */
					bar_width, /* w */
					bar_height, /* h */
					bar_height/2, /* border radius */
					0, /* border_size */
					"none", /* gradient_style */
					0, /* gradient_direction */
					add_color("#00000060", main_color+"20"), /* color1 */
					"#000000", /* color2 */
					"in/out", /* shadow_style */
					2, /* shadow_blur */
					add_color("#00000040", main_color+"40"), /* shadow_color */
				);
				break;
			case 1:
				var bar_x = 64;
				var bar_y = 37;
				var bar_width = 1020;
				var bar_height = 20;
				
				/* HP text */
				// get gradient
				x1 = 0;
				y1 = 0;
				x2 = 0;
				y2 = canvas.height;
				gradient = ctx.createLinearGradient(x1, y1, x2, y2);
				gradient.addColorStop(0, "rgba(255,255,255,1)");
				gradient.addColorStop(1, "rgba(240,240,240,1)");
				
				// init ctx
				ctx.font = "28px "+font_normal;
				ctx.textAlign = "left";
				ctx.textBaseline = "top"; // 
				ctx.fillStyle = gradient;
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 4;
				ctx.shadowColor = "rgba(0,0,0,0.8)";
				
				// draw
				ctx.fillText("HP", 12, 34); // pos at top left corner
				
				/* numbers */
				var numbers_start = bar_x; // x pos of the num 0
				var numbers_step = bar_width/10; // distance between 2 numbers
				
				// set ctx
				
				// get gradient
				x1 = 0;
				y1 = 0;
				x2 = 0;
				y2 = canvas.height;
				gradient = ctx.createLinearGradient(x1, y1, x2, y2);
				gradient.addColorStop(0, "rgba(255,255,255,1)");
				gradient.addColorStop(1, "rgba(240,240,240,1)");
				// init ctx
				ctx.fillStyle = gradient;
				ctx.strokeStyle = gradient;
				
				ctx.shadowOffsetX = 0;
				ctx.shadowOffsetY = 0;
				ctx.shadowBlur = 4;
				ctx.shadowColor = "rgba(0,0,0,0.8)";
				
				ctx.font = "24px "+font_normal;
				ctx.textBaseline = "top";
				ctx.textAlign = "center";
				
				ctx.lineWidth = 4;
				ctx.lineCap = "round";
				
				for(var i=0 ; i<=10 ; i++) {
					ctx.beginPath(); // 10bar
					ctx.moveTo(numbers_start+i*numbers_step, 61);
					ctx.lineTo(numbers_start+i*numbers_step, 61+6);
					ctx.stroke();
					ctx.closePath();
					
					if(i<10) { // 5bar
						ctx.beginPath(); // 10bar
						ctx.moveTo(numbers_start+(i+0.5)*numbers_step, 61);
						ctx.lineTo(numbers_start+(i+0.5)*numbers_step, 61+2);
						ctx.stroke();
						ctx.closePath();
					}
					
					ctx.fillText((i*10).toString(), numbers_start+i*numbers_step, 73);
				}
				
				/* bar */
				draw_rounded_rect(
					canvas_name, /* canvas name */
					bar_x, /* x */
					bar_y, /* y */
					bar_width, /* w */
					bar_height, /* h */
					bar_height/2, /* border radius */
					0, /* border_size */
					"none", /* gradient_style */
					0, /* gradient_direction */
					add_color("#00000060", main_color+"20"), /* color1 */
					"#000000", /* color2 */
					"in/out", /* shadow_style */
					2, /* shadow_blur */
					add_color("#00000040", main_color+"40"), /* shadow_color */
				);
				break;
				
		}
		
		
	}
	
	function generate_scorebar_colour(){
		var bar_x, bar_y, bar_width, bar_height;
		switch(scorebar_type) {
			case 0:
				bar_x = 84;
				bar_y = 37;
				bar_width = 1000;
				bar_height = 20;
				break;
			case 1:
				bar_x = 64;
				bar_y = 37;
				bar_width = 1020;
				bar_height = 20;
				break;
		}
		
		draw_rounded_rect(
			canvas_name, /* canvas name */
			bar_x+1-10, /* x */
			bar_y-1-32, /* y */
			bar_width+2, /* w */
			bar_height+2, /* h */
			(bar_height+2)/2, /* border radius */
			0, /* border_size */
			"linear", /* gradient_style */
			90, /* gradient_direction */
			main_color, /* color1 */
			add_color(main_color+"FF", "#FFFFFF33"), /* color2 */
			"none", /* shadow_style */
			0, /* shadow_blur */
			"rgba(0,0,0,0.5)", /* shadow_color */
		);
	}
	
	function generate_scoreentry_n(n) { /* generate a number n */
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var font = "22px "+font_normal;
		var correction_y = 2;
		
		// to get the ctx.measureText()
		ctx.font = font;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		
		// draw
		if("0123456789".indexOf(n) == -1) { // if n isn't a number
			// resize canvas
			canvas.width = ctx.measureText(n.toString()).width + 4;
			// draw
			draw_centered_text(
				canvas_name, /* canvas_name */
				n, /* text */
	 			font, /* font_settings */
				correction_y , /* correction_y */
				"rgba(240,240,240,1)", /* color1 */
				"rgba(240,240,240,1)", /* color2 */
				"in/out", /* shadow_style */
				2, /* shadow_blur */
				"rgba(0,0,0,0.7)", /* shadow_color */
			);
		} else {
			// resize canvas
			canvas.width = 21;
			// draw
			draw_centered_text(
				canvas_name, /* canvas_name */
				n, /* text */
	 			font, /* font_settings */
				correction_y , /* correction_y */
				"rgba(240,240,240,1)", /* color1 */
				"rgba(240,240,240,1)", /* color2 */
				"in/out", /* shadow_style */
				2, /* shadow_blur */
				"rgba(0,0,0,0.7)", /* shadow_color */
			);
		}
 	}
	
	function generate_section_text(text) { // pass/fail
		draw_centered_text(
			canvas_name, /* canvas_name */
			text, /* text */
	 		"200px "+font_normal, /* font_settings */
			20, /* correction_y */
			"rgba(255,255,255,1)", /* color1 */
			"rgba(215,215,215,1)", /* color2 */
			"in/out", /* shadow_style */
			3, /* shadow_blur */
			"rgba(0,0,0,1)", /* shadow_color */
		);
	}
	
	function generate_selection_mode_button(text, over) { // mode, mods, random, options
		/* over = generate the -over version */
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var gradient;
		
		if(text=="Mode" && over==false) {
			/* colored bar at the bottom */
			gradient = ctx.createLinearGradient(0, 0, 1980, 0);
			gradient.addColorStop(0, main_color);
			gradient.addColorStop(1900/1980, main_color);
			gradient.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = gradient;
			ctx.shadowBlur = 0;
			ctx.rect(0,canvas.height-180,canvas.width,6);
			ctx.fill();
			
			/* top colored part */
			ctx.lineWidth = 9;
			ctx.strokeStyle = main_color;
			ctx.beginPath();
			ctx.moveTo(0, canvas.height-1244); // 616
			ctx.lineTo(271, canvas.height-1244);
			ctx.quadraticCurveTo(284, canvas.height-1244, 293, canvas.height-1252); // 616, 608
			ctx.quadraticCurveTo(376, canvas.height-1376, 577, canvas.height-1376); // 484
			ctx.lineTo(canvas.width, canvas.height-1376);
			ctx.stroke();
			ctx.closePath();
			
			/* border button */
			ctx.fillStyle = "rgba(255,255,255,0.5)";
			ctx.shadowBlur = 0;
			ctx.beginPath();
			ctx.rect(186-1,(canvas.height-180)+20+6,1,180-2*20);  // 186 = width of selection-mode-over
			ctx.fill();
			ctx.closePath();
			
			/* text */
			ctx.fillStyle = "#EEEEEE";
			ctx.font = "28px "+font_normal;
			ctx.textBaseline = "bottom";
			ctx.textAlign = "center";
			ctx.fillText(text, 186/2, canvas.height-12);
			
		} else {
			/* border */
			if(over == false) {
				ctx.fillStyle = "rgba(255,255,255,0.5)";
				ctx.shadowBlur = 0;
				// border left
				ctx.beginPath();
				ctx.rect(0,20+6,1,canvas.height-2*20); // +6 = height of the colored bar
				ctx.fill();
				ctx.closePath();
				// border right
				if(text != "Options") { // because this is the button at the top right
					ctx.beginPath();
					ctx.rect(canvas.width-1,20+6,1,canvas.height-2*20);
					ctx.fill();
					ctx.closePath();
				}
			}
			
			/* text (and get colors for icons)*/
			if(over == true) { // over
				ctx.fillStyle = "#FFFFFF";
				ctx.strokeStyle = "#FFFFFF";
				ctx.shadowBlur = 6;
				ctx.shadowColor = "#FFFFFF";
			} else { // normal
				ctx.fillStyle = "#EEEEEE";
				ctx.strokeStyle = "#EEEEEE";
				ctx.shadowBlur = 0;
				ctx.shadowColor = "#EEEEEE";
			}
			ctx.font = "28px "+font_normal;
			ctx.textBaseline = "bottom";
			ctx.textAlign = "center";
			ctx.fillText(text, canvas.width/2, canvas.height-12);
			
			
			/* icon */
			switch(text) {
				case "Mods":
					ctx.lineWidth = 12;
					ctx.beginPath();
					ctx.moveTo(canvas.width/2, 36);
					ctx.lineTo(canvas.width/2, 108);
					ctx.stroke();
					ctx.closePath();
					ctx.beginPath();
					ctx.moveTo(canvas.width/2-(108+36)/4, (108+36)/2);
					ctx.lineTo(canvas.width/2+(108+36)/4, (108+36)/2);
					ctx.stroke();
					ctx.closePath();
					break;
				case "Random":
					draw_rounded_rect(
						canvas_name, /* canvas name */
						canvas.width/2-(76+4)/2, /* x */
						32, /* y */
						76, /* w */
						76, /* h */
						2, /* border radius */
						8, /* border_size */
						"linear", /* gradient_style */
						0, /* gradient_direction */
						ctx.strokeStyle, /* color1 */
						ctx.strokeStyle, /* color2 */
						"in/out", /* shadow_style */
						ctx.shadowBlur, /* shadow_blur */
						ctx.shadowColor /* shadow_color */
					);
					for(var i=(-1) ; i<2 ; i++) {
						ctx.beginPath();
						ctx.arc(canvas.width/2+i*17, canvas.height/2+i*17-17, 4, 0, 2*Math.PI);
						ctx.stroke();
						ctx.closePath();
					}
					break;
				case "Options":
					ctx.lineWidth = 12;
					for(var i=0 ; i<3 ; i++) {
						ctx.beginPath();
						ctx.moveTo(32, 44+28*i);
						ctx.lineTo(canvas.width-32, 44+28*i);
						ctx.stroke();
						ctx.closePath();
					}
			}
		}
	}
	
	function generate_selection_tab() {
		var canvas = document.getElementById(canvas_name);
		draw_rounded_rect(
			canvas_name, /* canvas name */
			16, /* x */
			2, /* y */
			canvas.width-16*2, /* w */
			canvas.height-2*2, /* h */
			4, /* border radius */
			0, /* border_size */
			"linear", /* gradient_style */
			0, /* gradient_direction */
			"rgba(210,210,210,1)", /* color1 */
			"rgba(140,140,140,1)", /* color2 */
			"in/out", /* shadow_style */
			2, /* shadow_blur */
			"#000000" /* shadow_color */
		);
	}
	
	function generate_sliderb() {
		const ball_size = 200; // diameter in px of the ball
		// background
		draw_centered_circle(
			canvas_name, /* canvas */
			0, /* border size */
			ball_size/2, /* circle radius */
			"radial", /* gradient style */
			0, /* gradient direction */
			"rgba(100,100,100,0.5)", /* color 1 */
			"rgba(80,80,80,0.5)", /* color 2 */
			"none", /* shadow style */
			0, /* shadow blur */
			"rgba(0,0,0,0)" /* shadow color */
		);
		// border
		draw_centered_circle(
			canvas_name, /* canvas */
			15, /* border size */
			ball_size/2, /* circle radius */
			"none", /* gradient style */
			0, /* gradient direction */
			"rgba(230,230,230,1)", /* color 1 */
			"rgba(230,230,230,1)", /* color 2 */
			"none", /* shadow style */
			0, /* shadow blur */
			"rgba(0,0,0,0)" /* shadow color */
		);
	}

	function generate_sliderfollowcircle() {
		const circle_size = 400; // diameter in px of the circle
		draw_centered_circle(
			canvas_name, /* canvas */
			15, /* border size */
			circle_size/2, /* circle radius */
			"none", /* gradient style */
			0, /* gradient direction */
			add_color(main_color+"FF", "#FFFFFFCC"), /* color 1 */
			add_color(main_color+"FF", "#FFFFFFCC"), /* color 2 */
			"in/out", /* shadow style */
			18, /* shadow blur */
			add_color(main_color+"FF", "#FFFFFFCC") /* shadow color */
		);
	}
	
	function generate_sliderscorepoint(){
		const circle_size = 28; // diameter in px of the circle
		draw_centered_circle(
			canvas_name, /* canvas */
			10, /* border size */
			circle_size/2, /* circle radius */
			"none", /* gradient style */
			0, /* gradient direction */
			add_color(main_color+"FF", "#FFFFFFCC"), /* color 1 */
			add_color(main_color+"FF", "#FFFFFFCC"), /* color 2 */
			"in/out", /* shadow style */
			2, /* shadow blur */
			"rgba(255,255,255,0.95)" /* shadow color */
		);
	}
	
	function generate_spinner_approachcircle() {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var circle_size;
		switch(spinner_type) {
			case 0: // the big spinner
				circle_size = 568; // diameter in px of the approachcircle (should be around 50% of the spinner-circle size)
				// resize canvas
				canvas.width = 630;
				canvas.height = 630;
				// init ctx
				ctx.strokeStyle = main_color;
				ctx.lineWidth = 7;
				ctx.shadowBlur = 2;
				ctx.shadowColor = main_color;
				// draw
				for(var i=0 ; i<18 ; i++) {
					ctx.beginPath();
					ctx.arc(canvas.width/2, canvas.height/2, circle_size/2, (20*i)/180*Math.PI, (20*i+15)/180*Math.PI);
					ctx.stroke();
					ctx.closePath();
				}
				break;
			case 1: // the small
				circle_size = 340;
				// resize canvas
				canvas.width = 370;
				canvas.height = 370;
				// draw
				draw_centered_circle(
					canvas_name, /* canvas */
					7, /* border size */
					circle_size/2, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					main_color, /* color 1 */
					main_color, /* color 2 */
					"in/out", /* shadow style */
					2, /* shadow blur */
					main_color /* shadow color */
				);
				break;
		}
		
	}
	
	function generate_spinner_circle(){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var circle_size; // diameter in px of the approachcircle
		switch(spinner_type) {
			case 0:
				circle_size = 1100;
				// resize canvas
				canvas.width = 1150;
				canvas.height = 1150;
				// outer border
				draw_centered_circle(
					canvas_name, /* canvas */
					14, /* border size */
					circle_size/2, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"in/out", /* shadow style */
					2, /* shadow blur */
					"rgba(255,255,255,1)" /* shadow color */
				);
				// inner circle
				draw_centered_circle(
					canvas_name, /* canvas */
					14, /* border size */
					circle_size/2/20, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"in/out", /* shadow style */
					2, /* shadow blur */
					"rgba(255,255,255,1)" /* shadow color */
				);
				// the 2 dots around the center circle
				var d = 50; // distance between the central circle and the dots center
				var s = 14; // the diameter of these circle
				ctx.lineWidth = 0;
				ctx.fillStyle = "rgba(255,255,255,1)";
				ctx.beginPath();
				ctx.arc(canvas.width/2-d, canvas.height/2, s/2, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				ctx.beginPath();
				ctx.arc(canvas.width/2+d, canvas.height/2, s/2, 0, 2*Math.PI);
				ctx.fill();
				ctx.closePath();
				break;
			case 1:
				circle_size = 650;
				// resize canvas
				canvas.width = 700;
				canvas.height = 700;
				// init ctx
				ctx.strokeStyle = "rgba(255,255,255,1)";
				ctx.lineWidth = 14;
				ctx.shadowBlur = 2;
				ctx.shadowColor = "rgba(255,255,255,1)";
				// draw
				for(var i=0 ; i<2 ; i++) {
					ctx.beginPath();
					ctx.arc(canvas.width/2, canvas.height/2, circle_size/2, (180*i)/180*Math.PI, (180*i+150)/180*Math.PI);
					ctx.stroke();
					ctx.closePath();
				}
				// inner circle
				draw_centered_circle(
					canvas_name, /* canvas */
					14, /* border size */
					circle_size/2/20, /* circle radius */
					"none", /* gradient style */
					0, /* gradient direction */
					"rgba(255,255,255,1)", /* color 1 */
					"rgba(255,255,255,1)", /* color 2 */
					"in/out", /* shadow style */
					2, /* shadow blur */
					"rgba(255,255,255,1)" /* shadow color */
				);
				break;
		}
	}
	
	function generate_spinner_clear(){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		ctx.lineWidth = 15;
		ctx.strokeStyle = main_color;
		ctx.shadowBlur = 6;
		ctx.shadowColor = main_color;
		ctx.beginPath();
		ctx.moveTo(20,80);
		ctx.lineTo(72,128);
		ctx.lineTo(163,36);
		ctx.stroke();
		ctx.closePath();
	}
	
	function generate_spinner_metre(){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		const circle_size = 1048; // diameter in px of the approachcircle (should be a little smaller than the spinner-circle)
		switch(spinner_type) {
			case 0:
				// resize canvas
				canvas.width = 2048;
				canvas.height = 1384;
				// draw
				ctx.strokeStyle = main_color;
				ctx.lineWidth = 14;
				ctx.shadowBlur = 2;
				ctx.shadowColor = main_color;
				ctx.beginPath();
				ctx.arc(canvas.width/2, canvas.height/2+9, circle_size/2, 0, 2*Math.PI);
				ctx.stroke();
				ctx.closePath();
				break;
			case 1: // nothing, no spinner-metre for this
				// resize canvas
				canvas.width = 1;
				canvas.height = 1;
				break;
		}
	}
	
	function generate_spinner_rpm(){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		
		// set shadow
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 4
		ctx.shadowColor = "rgba(0,0,0,0.8)";
		
		// get gradient for the text
		x1 = 0;
		y1 = 0;
		x2 = 0;
		y2 = canvas.height;
		gradient = ctx.createLinearGradient(x1, y1, x2, y2);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(1, "rgba(240,240,240,1)");
		
		/* RPM text */
		// init ctx
		ctx.font = "56px "+font_normal;
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillStyle = gradient;
		// draw
		ctx.fillText("RPM", 24, canvas.height/2+3);
		
		/* ':' colored */
		ctx.fillStyle = main_color;
		ctx.fillText(":", canvas.width/2, canvas.height/2+3);
	}
	
	function generate_star() {
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var points = [
			[50.5,7], [61,39], [94,39], [66,58], [77,90],
			[50.5,71], [24,90], [33,58], [7,39], [39,39]
		];
		ctx.fillStyle = "#FFFFFF";
		ctx.strokeStyle = "#FFFFFF";
		ctx.lineWidth = 2;
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		
		ctx.beginPath();
		ctx.moveTo(points[0][0], points[0][1]);
		for(var i=1 ; i<=points.length ; i++) {
			ctx.lineTo(points[i%points.length][0], points[i%points.length][1]);
			ctx.stroke();
		}
		ctx.fill();
	}
	
	
	/* create 2x times versions */
	// create the canvas
	new_element = document.createElement("canvas");
	new_element.id = elements_2x[element_id][1]+"_2x"; // give him an id
	document.getElementById("generated_elements_2x").appendChild(new_element);
	// get the canvas
	canvas_name = elements_2x[element_id][1]+"_2x";
	canvas = document.getElementById(canvas_name);
	ctx = canvas.getContext("2d");
	// resize the canvas
	canvas.width = elements_2x[element_id][2];
	canvas.height = elements_2x[element_id][3];
	// clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	switch(elements_2x[element_id][0]) { /* files names */
		case "approachcircle": generate_approachcircle(); break;
		case "arrow-warning": generate_arrow_warning(); break;
		case "button-left": generate_button("left"); break;
		case "button-middle": generate_button("middle"); break;
		case "button-right": generate_button("right"); break;
		case "combo-0": generate_combo_n(0); break;
		case "combo-1": generate_combo_n(1); break;
		case "combo-2": generate_combo_n(2); break;
		case "combo-3": generate_combo_n(3); break;
		case "combo-4": generate_combo_n(4); break;
		case "combo-5": generate_combo_n(5); break;
		case "combo-6": generate_combo_n(6); break;
		case "combo-7": generate_combo_n(7); break;
		case "combo-8": generate_combo_n(8); break;
		case "combo-9": generate_combo_n(9); break;
		case "combo-x": generate_combo_n("x"); break;
		case "count1": generate_count("1"); break;
		case "count2": generate_count("2"); break;
		case "count3": generate_count("3"); break;
		case "cursor": generate_cursor(); break;
		case "cursortrail": generate_cursortrail(); break;
		case "default-0": generate_default_n(0); break;
		case "default-1": generate_default_n(1); break;
		case "default-2": generate_default_n(2); break;
		case "default-3": generate_default_n(3); break;
		case "default-4": generate_default_n(4); break;
		case "default-5": generate_default_n(5); break;
		case "default-6": generate_default_n(6); break;
		case "default-7": generate_default_n(7); break;
		case "default-8": generate_default_n(8); break;
		case "default-9": generate_default_n(9); break;
		case "fail-background": generate_fail_background(); break;
		case "followpoint-0": generate_followpoint(0); break;
		case "followpoint-1": generate_followpoint(1); break;
		case "followpoint-2": generate_followpoint(2); break;
		case "followpoint-3": generate_followpoint(3); break;
		case "followpoint-4": generate_followpoint(4); break;
		case "followpoint-5": generate_followpoint(5); break;
		case "followpoint-6": generate_followpoint(6); break;
		case "followpoint-7": generate_followpoint(7); break;
		case "followpoint-8": generate_followpoint(8); break;
		case "followpoint-9": generate_followpoint(9); break;
		case "followpoint-10": generate_followpoint(10); break;
		case "followpoint-11": generate_followpoint(11); break;
		case "followpoint-12": generate_followpoint(12); break;
		case "followpoint-13": generate_followpoint(13); break;
		case "followpoint-14": generate_followpoint(14); break;
		case "followpoint-15": generate_followpoint(15); break;
		case "go": generate_count("go"); break;
		case "hit0": generate_hitburst_ranking("0"); break;
		case "hit50": generate_hitburst_ranking("50"); break;
		case "hit100": generate_hitburst_ranking("100"); break;
		case "hit100k": generate_hitburst_ranking("100k"); break;
		case "hit300": generate_hitburst_ranking("300"); break;
		case "hit300g": generate_hitburst_ranking("300g"); break;
		case "hit300k": generate_hitburst_ranking("300k"); break;
		case "hit0-0": generate_hitburst_ingame("0"); break;
		case "hit50-0": generate_hitburst_ingame("50"); break;
		case "hit100-0": generate_hitburst_ingame("100"); break;
		case "hit100k-0": generate_hitburst_ingame("100"); break;
		case "hitcircle": generate_hitcircle(); break;
		case "hitcircleoverlay": generate_hitcircleoverlay(); break;
		case "inputoverlay-background": generate_inputoverlay_background(); break;
		case "inputoverlay-key": generate_inputoverlay_key(); break;
		case "lighting": generate_lighting(); break;
		case "menu-back": generate_menu_back(); break;
		case "menu-button-background": generate_menu_button_background(); break;
		case "mode-fruits": generate_mode_m("fruits"); break;
		case "mode-mania": generate_mode_m("mania"); break;
		case "mode-osu": generate_mode_m("osu"); break;
		case "mode-taiko": generate_mode_m("taiko"); break;
		case "mode-fruits-med": generate_mode_m_med("fruits"); break;
		case "mode-mania-med": generate_mode_m_med("mania"); break;
		case "mode-osu-med": generate_mode_m_med("osu"); break;
		case "mode-taiko-med": generate_mode_m_med("taiko"); break;
		case "mode-fruits-small": generate_mode_m_small("fruits"); break;
		case "mode-mania-small": generate_mode_m_small("mania"); break;
		case "mode-osu-small": generate_mode_m_small("osu"); break;
		case "mode-taiko-small": generate_mode_m_small("taiko"); break;
		case "pause-back": generate_pause_button("Back"); break;
		case "pause-continue": generate_pause_button("Continue"); break;
		case "pause-replay": generate_pause_button("Watch replay"); break;
		case "pause-retry": generate_pause_button("Retry"); break;
		case "pause-overlay": generate_pause_overlay(); break;
		case "play-skip": generate_play_skip(); break;
		case "ranking-graph": generate_ranking_graph(); break;
		case "ranking-panel": generate_ranking_panel(); break;
		case "ranking-perfect": generate_ranking_perfect(); break;
		case "ranking-title": generate_ranking_title(); break;
		case "ranking-a": generate_grade_letter("A"); break;
		case "ranking-b": generate_grade_letter("B"); break;
		case "ranking-c": generate_grade_letter("C"); break;
		case "ranking-d": generate_grade_letter("D"); break;
		case "ranking-s": generate_grade_letter("S"); break;
		case "ranking-sh": generate_grade_letter("SH"); break;
		case "ranking-x": generate_grade_letter("SS"); break;
		case "ranking-xh": generate_grade_letter("SSH"); break;
		case "ranking-a-small": generate_grade_letter_small("A"); break;
		case "ranking-b-small": generate_grade_letter_small("B"); break;
		case "ranking-c-small": generate_grade_letter_small("C"); break;
		case "ranking-d-small": generate_grade_letter_small("D"); break;
		case "ranking-s-small": generate_grade_letter_small("S"); break;
		case "ranking-sh-small": generate_grade_letter_small("SH"); break;
		case "ranking-x-small": generate_grade_letter_small("SS"); break;
		case "ranking-xh-small": generate_grade_letter_small("SSH"); break;
		case "ready": generate_count("ready"); break;
		case "reversearrow": generate_reversearrow(); break;
		case "section-fail": generate_section_text("Fail"); break;
		case "section-pass": generate_section_text("Pass"); break;
		case "score-0": generate_score_n(0); break;
		case "score-1": generate_score_n(1); break;
		case "score-2": generate_score_n(2); break;
		case "score-3": generate_score_n(3); break;
		case "score-4": generate_score_n(4); break;
		case "score-5": generate_score_n(5); break;
		case "score-6": generate_score_n(6); break;
		case "score-7": generate_score_n(7); break;
		case "score-8": generate_score_n(8); break;
		case "score-9": generate_score_n(9); break;
		case "score-comma": generate_score_n(","); break;
		case "score-dot": generate_score_n("."); break;
		case "score-percent": generate_score_n("%"); break;
		case "score-x": generate_score_n("x"); break;
		case "scorebar-bg": generate_scorebar_bg(); break;
		case "scorebar-colour": generate_scorebar_colour(); break;
		case "scoreentry-0": generate_scoreentry_n(0); break;
		case "scoreentry-1": generate_scoreentry_n(1); break;
		case "scoreentry-2": generate_scoreentry_n(2); break;
		case "scoreentry-3": generate_scoreentry_n(3); break;
		case "scoreentry-4": generate_scoreentry_n(4); break;
		case "scoreentry-5": generate_scoreentry_n(5); break;
		case "scoreentry-6": generate_scoreentry_n(6); break;
		case "scoreentry-7": generate_scoreentry_n(7); break;
		case "scoreentry-8": generate_scoreentry_n(8); break;
		case "scoreentry-9": generate_scoreentry_n(9); break;
		case "scoreentry-comma": generate_scoreentry_n(","); break;
		case "scoreentry-dot": generate_scoreentry_n("."); break;
		case "scoreentry-percent": generate_scoreentry_n("%"); break;
		case "scoreentry-x": generate_scoreentry_n("x"); break;
		case "selection-mode": generate_selection_mode_button("Mode", false); break;
		case "selection-mode-over": generate_selection_mode_button("Mode", true); break;
		case "selection-mods": generate_selection_mode_button("Mods", false); break;
		case "selection-mods-over": generate_selection_mode_button("Mods", true); break;
		case "selection-random": generate_selection_mode_button("Random", false); break;
		case "selection-random-over": generate_selection_mode_button("Random", true); break;
		case "selection-options": generate_selection_mode_button("Options", false); break;
		case "selection-options-over": generate_selection_mode_button("Options", true); break;
		case "selection-mod-autoplay": generate_mod_icon("AT"); break;
		case "selection-mod-cinema": generate_mod_icon("CN"); break;
		case "selection-mod-doubletime": generate_mod_icon("DT"); break;
		case "selection-mod-easy": generate_mod_icon("EZ"); break;
		case "selection-mod-fadein": generate_mod_icon("FI"); break;
		case "selection-mod-flashlight": generate_mod_icon("FL"); break;
		case "selection-mod-halftime": generate_mod_icon("HT"); break;
		case "selection-mod-hardrock": generate_mod_icon("HR"); break;
		case "selection-mod-hidden": generate_mod_icon("HD"); break;
		case "selection-mod-key1": generate_mod_icon("1K"); break;
		case "selection-mod-key2": generate_mod_icon("2K"); break;
		case "selection-mod-key3": generate_mod_icon("3K"); break;
		case "selection-mod-key4": generate_mod_icon("4K"); break;
		case "selection-mod-key5": generate_mod_icon("5K"); break;
		case "selection-mod-key6": generate_mod_icon("6K"); break;
		case "selection-mod-key7": generate_mod_icon("7K"); break;
		case "selection-mod-key8": generate_mod_icon("8K"); break;
		case "selection-mod-key9": generate_mod_icon("9K"); break;
		case "selection-mod-keycoop": generate_mod_icon("2P"); break;
		case "selection-mod-mirror": generate_mod_icon("MR"); break;
		case "selection-mod-nightcore": generate_mod_icon("NC"); break;
		case "selection-mod-nofail": generate_mod_icon("NF"); break;
		case "selection-mod-perfect": generate_mod_icon("PF"); break;
		case "selection-mod-random": generate_mod_icon("RD"); break;
		case "selection-mod-relax": generate_mod_icon("RX"); break;
		case "selection-mod-relax2": generate_mod_icon("AP"); break;
		case "selection-mod-scorev2": generate_mod_icon("v2"); break;
		case "selection-mod-spunout": generate_mod_icon("SO"); break;
		case "selection-mod-suddendeath": generate_mod_icon("SD"); break;
		case "selection-mod-target": generate_mod_icon("TP"); break;
		case "selection-mod-touchdevice": generate_mod_icon("TD"); break;
		case "selection-tab": generate_selection_tab(); break;
		case "sliderb0": generate_sliderb(); break;
		case "sliderfollowcircle": generate_sliderfollowcircle(); break;
		case "sliderscorepoint": generate_sliderscorepoint(); break;
		case "spinner-approachcircle": generate_spinner_approachcircle(); break;
		case "spinner-clear": generate_spinner_clear(); break;
		case "spinner-circle": generate_spinner_circle(); break;
		case "spinner-metre": generate_spinner_metre(); break;
		case "spinner-rpm": generate_spinner_rpm(); break;
		case "star": generate_star(); break;
	}
	
	/* generate 1x version */
	// create the canvas
	new_element = document.createElement("canvas");
	canvas_name = elements_2x[element_id][1];
	new_element.id = canvas_name; // give him a id
	document.getElementById("generated_elements_1x").appendChild(new_element);
	// get the canvas
	canvas = document.getElementById(canvas_name);
	ctx = canvas.getContext("2d");
	// resize the canvas
	canvas.width = document.getElementById(canvas_name+"_2x").width/2;
	canvas.height = document.getElementById(canvas_name+"_2x").height/2;
	// clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// copy
	ctx.drawImage(document.getElementById(canvas_name+"_2x"), 0, 0, canvas.width, canvas.height);
}

function generate_skin_ini() {
	
	function combo_color(n, color_id) {
		if(n%2==1) { // colors 1-3
			return hex_to_rgb(add_color(material[get_color_data(color_id)[0]][get_color_data(color_id)[1]]+"FF", "#FFFFFF22"));
		} else { // colors 2-4
			return hex_to_rgb(add_color(material[get_color_data(color_id)[0]][get_color_data(color_id)[1]]+"FF", "#00000022"));
		}
	}
	
	function name(color_id) { // return the full skin name
		return "- Project 4";
	}
	
	function slider_border_color(color_id) {
		return hex_to_rgb(add_color(material[get_color_data(color_id)[0]][get_color_data(color_id)[1]]+"FF","#80808080"));
	}
	
	const div_name = "skin_ini_content"; // HTML element name who contains the skin.ini content
	var data_general = [ // property name, value (str)
		["Name", name(main_color_id)],
		["Author", "Corne2Plum3"],
		["SliderBallFlip", "0"],
		["CursorRotate", "0"],
		["CursorExpand", "0"],
		["CursorCentre", "1"],
		["HitCircleOverlayAboveNumer", "1"],
		["SliderStyle", "2"],
		["AllowSliderBallTint", "1"],
		["Version", "2.5"]
	];
	var data_colours = [
		["Combo1", combo_color(1, main_color_id)],
		["Combo2", combo_color(2, main_color_id)],
		["Combo3", combo_color(3, main_color_id)],
		["Combo4", combo_color(4, main_color_id)],
		["InputOverlayText", "255,255,255"],
		["SongSelectActiveText", "255,255,255"],
		["SongSelectInactiveText", "130,130,130"],
		["SliderBorder", slider_border_color(main_color_id)],
		["SliderTrackOverride", "0,0,0"],
	];
	var data_fonts = [
		["ComboPrefix", "combo"],
		["ComboOverlap", "8"],
		["HitCirclePrefix", "default"],
		["HitCircleOverlap", "10"],
		["ScorePrefix", "score"],
		["ScoreOverlap", "5"]
	];
	
	document.getElementById(div_name).innerHTML = ""; // clear
	document.getElementById(div_name).innerHTML += "[General]\n";
	for(var i=0 ; i<data_general.length ; i++) {
		document.getElementById(div_name).innerHTML += data_general[i][0]+": "+data_general[i][1]+"\n";
	}
	document.getElementById(div_name).innerHTML += "\n[Colours]\n";
	for(var i=0 ; i<data_colours.length ; i++) {
		document.getElementById(div_name).innerHTML += data_colours[i][0]+": "+data_colours[i][1]+"\n";
	}
	document.getElementById(div_name).innerHTML += "\n[Fonts]\n";
	for(var i=0 ; i<data_fonts.length ; i++) {
		document.getElementById(div_name).innerHTML += data_fonts[i][0]+": "+data_fonts[i][1]+"\n";
	}
}

function export_skin() {
	
	function getBase64String(dataURL) {
		/* from this: https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f */
		var idx = dataURL.indexOf('base64,') + 'base64,'.length;
		return dataURL.substring(idx);
	}
	
	function canvas_to_file(canvas_name, file_name) { // add a file for the jsZip
		/* file_name full name (with the .png) */
		let png = document.getElementById(canvas_name).toDataURL('image/png'); // image as dataURL
		let baseString = getBase64String(png);
		jsZip.file(file_name, baseString, {base64 : true});
	}
	
	// refresh canvas and skin.ini
	generate_canvas();
	generate_skin_ini();
	var skin_name = "- test "+main_color_id.toString();
	
	let jsZip = new JSZip(); // constructor for the ZIP
	/*
	// img elements
	for(var i=0 ; i<elements_2x.length ; i++) {
		if(elements_2x[i][1]!=null) {
			canvas_to_file(elements_2x[i][1], elements_2x[i][0]+".png");
			canvas_to_file(elements_2x[i][1]+"_2x", elements_2x[i][0]+"@2x.png");
		}
	}
	
	// transparant files 
	for(var i=0 ; i<transparant_files.length ; i++) {
		canvas_to_file("blank_canvas", transparant_files[i]+".png");
	}
	
	// skin.ini
	var skin_ini_content = document.getElementById("skin_ini_content").innerText;
	jsZip.file("skin.ini", skin_ini_content);
	*/
	// hitsounds
	
	
	
	/* Generate the zip file */
	jsZip.generateAsync({type:"blob"}).then(function (content) {
		content = URL.createObjectURL(content);
		// define the name
		const forbidden_files_names = ["CON","PRN","AUX","NUL","COM1","COM2","COM3","COM4","COM5","COM6","COM7","COM8","COM9","LPT1","LPT2","LPT3","LPT4","LPT5","LPT6","LPT7","LPT8","LPT9"]; // forbidden Windows files names
		const forbidden_caracteres = '<>:«,/\\|?*"'; // caracters who can appears in a file name
		var name = "";
			if(forbidden_files_names.indexOf(skin_name) != -1) { // if in the forbidden list names
				skin_name = "'" + skin_name + "'";
			}
			for(var i=0 ; i<skin_name.length ; i++) {
				if(forbidden_caracteres.indexOf(skin_name[i]) == -1) { // if in the allowed_caracteres_list
					name += skin_name[i];
				} else {
					name += "_";
				}
			}
			if(name[skin_name.length-1] == " " || name[skin_name.length-1] == ".") { // last caracter
				name[skin_name.length-1] = "_";
			}
			name += ".zip"; // add .zip at the end
		download(content, name); // already written above
	});
}