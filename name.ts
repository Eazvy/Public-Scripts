function s(e){return window.enmity.assets.getIDByName(e)}function K(e){window.enmity.plugins.registerPlugin(e)}const v={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function M(...e){return window.enmity.modules.bulk(...e)}function b(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const P=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const w=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const y=window.enmity.modules.common.Storage,E=window.enmity.modules.common.Toasts,$=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const N=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const k=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function Q(e){return window.enmity.patcher.create(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const X=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const Z=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const p=o.Text;o.TextInput,o.TouchableHighlight;const f=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const _=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const F=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const c=o.FormRow,L=o.FormSection;o.FormSelect,o.FormSubLabel;const ee=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors;const B=e=>{let t=0;for(let a in e)t++;return t},d={Debug:s("debug"),Retry:s("ic_message_retry"),Failed:s("Small"),Cancel:s("ic_megaphone_nsfw_16px"),Add:s("add_white"),Delete:s("ic_message_delete"),Clear:s("ic_clear_all_24px"),Pencil:s("ic_pencil_24px"),Success:s("ic_selection_checked_24px"),Warning:s("ic_warning_24px"),Copy:s("toast_copy_link"),Open:s("ic_leave_stage"),Clipboard:s("pending-alert"),Initial:s("coffee"),Shield:s("ic_person_shield"),Debug_Command:{Sent:s("ic_application_command_24px"),Clock:s("clock")},Settings:{Toasts:{Context:s("toast_image_saved"),Settings:s("ic_selection_checked_24px")},Self:s("friends_toast_icon"),Share:s("share"),Robot:s("ic_robot_24px"),Commands:s("ic_profile_badge_bot_commands"),Debug:s("ic_rulebook_16px")}},A=e=>{E.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},te=e=>{let t=e.split(`
`).map(a=>{if(a!="")return`"${a.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[B(t)]=`${t[B(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function U(){try{let e=await y.getItem("device_list");if(e)return JSON.parse(e);let t=(await N.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,a=te(t);await y.setItem("device_list",a);let i=await y.getItem("device_list");return JSON.parse(i)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ne(e,t,a){let i=await U();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${a.split("-")[1]}
> **Discord Build:** ${w.InfoDictionaryManager.Version} (${w.InfoDictionaryManager.Build})
> **Software Version:** ${w.DCDDeviceManager.systemVersion}
> **Device:** ${i[w.DCDDeviceManager.device]}`}async function oe(e){let t=w.DCDDeviceManager.device,a=await U();t.includes("iPhone")&&(t=t.replace("iPhone",""),t=t.replace(",","."),(parseFloat(t)<10.6&&parseFloat(t)!=10.3||parseFloat(t)==14.6||parseFloat(t)==12.8)&&y.getItem(`__${e.name}_incompatible_dialog__`).then(i=>{i??$.show({title:"Incompatible iPhone",body:`Please note that you're on an${a[w.DCDDeviceManager.device]}.
Some features in ${e.name} may behave in an unexpected manner.`,confirmText:"Don't show again",cancelText:"Close",onConfirm:()=>y.setItem(`__${e.name}_incompatible_dialog__`,"true")})}))}const{native:S}=window.enmity;function ie(){S.reload()}S.version,S.build,S.device,S.version;const ae=b("transitionToGuild");async function se({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,a=await(await N.get(t)).text;let i=a.match(/\d\.\d\.\d+/g),r=a.match(/patch\-\d\.\d\.\d+/g);return!i||!r?O(e.name,e.version):(i=i[0],r=r[0],i!=e.version?V(t,i,r.split("-")[1],e,!1):r!=e.build?V(t,i,r.split("-")[1],e,!0):O(e.name,e.version))}const V=(e,t,a,i,r)=>{const l=r?a:t;$.show({title:"Update found",body:`A newer ${r?"build":"version"} is available for ${i.name}. ${r?`
The version will remain at ${t}, but the build will update to ${a}.`:""}
Would you like to install ${r?`build \`${a}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>re(e,l,i,r)})},O=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),E.open({content:`${e} is on latest version (${t})`,source:d.Success})};async function re(e,t,a,i){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?$.show({title:`Updated ${a.name}`,body:`Successfully updated to ${i?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{ie()}}):$.show({title:"Error",body:`Something went wrong while updating ${a.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ae.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${a.name}%20Update%20Error%3A%20${i?`b${t}`:`v${t}`}`)}})})}const D=window.enmity.modules.common.Components.General.Animated,[T,le]=M(v.byProps("transitionToGuild"),v.byProps("setString")),m=k.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:u.Fonts.DISPLAY_NORMAL},header:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:u.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:u.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var ce=({manifest:e})=>{const t=n.useRef(new D.Value(1)).current,a=()=>{D.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{D.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},r=()=>{T.openURL("https://spin.rip/")},l={transform:[{scale:t}]};return n.createElement(n.Fragment,null,n.createElement(f,{onPress:r,onPressIn:a,onPressOut:i},n.createElement(D.View,{style:[l]},n.createElement(X,{style:[m.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(_,{style:m.text_container},n.createElement(f,{onPress:()=>{T.openURL(e.sourceUrl)}},n.createElement(p,{style:[m.main_text,m.header]},e.name," ")),n.createElement(_,{style:{flexDirection:"row"}},n.createElement(p,{style:[m.main_text,m.sub_header]},"A plugin by"),n.createElement(f,{onPress:()=>{T.openURL("https://spin.rip/")}},n.createElement(p,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(_,{style:{flexDirection:"row"}},n.createElement(p,{style:[m.main_text,m.sub_header]},"Settings page by"),n.createElement(f,{onPress:()=>{T.openURL("https://github.com/acquitelol/")}},n.createElement(p,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(_,null,n.createElement(f,{style:{flexDirection:"row"},onPress:()=>{le.setString(`**${e.name}** v${e.version}`),A("plugin name and version")}},n.createElement(p,{style:[m.main_text,m.sub_header]},"Version:"),n.createElement(p,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[me,z]=M(v.byProps("transitionToGuild","openURL"),v.byProps("setString","getString")),g=k.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var de=({manifest:e,settings:t,hasToasts:a,children:i,commands:r})=>n.createElement(Z,null,n.createElement(ce,{manifest:e}),i,r&&n.createElement(L,{title:"Plugin Commands"},r.map(l=>n.createElement(c,{label:`/${l.name}`,subLabel:l.description,leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Commands}),trailing:c.Arrow,onPress:function(){z.setString(`/${l.name}`),A(`the command ${l.name}`)}}))),n.createElement(L,{title:"Utility"},a&&n.createElement(n.Fragment,null,n.createElement(c,{label:"Initialization Toasts",leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ee,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),E.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Success})}})}),n.createElement(F,null)),n.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Debug}),trailing:c.Arrow,onPress:async function(){z.setString(await ne(e.name,e.version,e.build)),A("plugin debug information")}}),n.createElement(F,null),n.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(c.Icon,{style:g.icon,source:d.Delete}),trailing:c.Arrow,onPress:async function(){await y.removeItem("device_list"),E.open({content:"Cleared device list storage.",source:d.Success})}})),n.createElement(L,{title:"Source"},n.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Copy}),trailing:c.Arrow,onPress:()=>{se({manifest:e})}}),n.createElement(F,null),n.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Open}),trailing:c.Arrow,onPress:()=>{me.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(c,{style:g.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),ue="MessageSpoofer",pe="1.1.9",ge="patch-1.0.13",we="Change what people say.",ye=[{name:"Marek (modified by spin)",id:"308440976723148800"}],he="#ff0069",be="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/MessageSpoofer.js",I={name:ue,version:pe,build:ge,description:we,authors:ye,color:he,sourceUrl:be};const[me,z]=M(v.byProps("transitionToGuild","openURL"),v.byProps("setString","getString")),g=k.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var de=({manifest:e,settings:t,hasToasts:a,children:i,commands:r})=>n.createElement(Z,null,n.createElement(ce,{manifest:e}),i,r&&n.createElement(L,{title:"Plugin Commands"},r.map(l=>n.createElement(c,{label:`/${l.name}`,subLabel:l.description,leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Commands}),trailing:c.Arrow,onPress:function(){z.setString(`/${l.name}`),A(`the command ${l.name}`)}}))),n.createElement(L,{title:"Utility"},a&&n.createElement(n.Fragment,null,n.createElement(c,{label:"Initialization Toasts",leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ee,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),E.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Success})}})}),n.createElement(F,null)),n.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Debug}),trailing:c.Arrow,onPress:async function(){z.setString(await ne(e.name,e.version,e.build)),A("plugin debug information")}}),n.createElement(F,null),n.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(c.Icon,{style:g.icon,source:d.Delete}),trailing:c.Arrow,onPress:async function(){await y.removeItem("device_list"),E.open({content:"Cleared device list storage.",source:d.Success})}})),n.createElement(L,{title:"Source"},n.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Copy}),trailing:c.Arrow,onPress:()=>{se({manifest:e})}}),n.createElement(F,null),n.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Open}),trailing:c.Arrow,onPress:()=>{me.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(c,{style:g.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),ue="MessageSpoofer",pe="1.1.9",ge="patch-1.0.13",we="Change what people say.",ye=[{name:"Marek (modified by spin)",id:"308440976723148800"}],he="#ff0069",be="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/MessageSpoofer.js",I={name:ue,version:pe,build:ge,description:we,authors:ye,color:he,sourceUrl:be};const[me,z]=M(v.byProps("transitionToGuild","openURL"),v.byProps("setString","getString")),g=k.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var de=({manifest:e,settings:t,hasToasts:a,children:i,commands:r})=>n.createElement(Z,null,n.createElement(ce,{manifest:e}),i,r&&n.createElement(L,{title:"Plugin Commands"},r.map(l=>n.createElement(c,{label:`/${l.name}`,subLabel:l.description,leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Commands}),trailing:c.Arrow,onPress:function(){z.setString(`/${l.name}`),A(`the command ${l.name}`)}}))),n.createElement(L,{title:"Utility"},a&&n.createElement(n.Fragment,null,n.createElement(c,{label:"Initialization Toasts",leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ee,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),E.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Success})}})}),n.createElement(F,null)),n.createElement(c,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Settings.Debug}),trailing:c.Arrow,onPress:async function(){z.setString(await ne(e.name,e.version,e.build)),A("plugin debug information")}}),n.createElement(F,null),n.createElement(c,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(c.Icon,{style:g.icon,source:d.Delete}),trailing:c.Arrow,onPress:async function(){await y.removeItem("device_list"),E.open({content:"Cleared device list storage.",source:d.Success})}})),n.createElement(L,{title:"Source"},n.createElement(c,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Copy}),trailing:c.Arrow,onPress:()=>{se({manifest:e})}}),n.createElement(F,null),n.createElement(c,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(c.Icon,{style:g.icon,source:d.Open}),trailing:c.Arrow,onPress:()=>{me.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(c,{style:g.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`}));async function ue(){try{await window.enmity.modules.settings.loadSettings(ue),await window.enmity.modules.settings.loadSettings("BetterSearch");const e=new Date,t=e.getDate(),a=e.getMonth(),i=e.getFullYear(),r=await window.enmity.modules.settings.getString("plugin_date");let l=await window.enmity.modules.settings.getString("plugin_changelog");l!=i&&window.enmity.modules.settings.setString("plugin_changelog",i),r!=`${t}-${a}-${i}`&&(window.enmity.modules.settings.setString("plugin_date",`${t}-${a}-${i}`),$.show({title:"Update",body:`The plugin ${ue} has been updated. To view the changes, check the changelog.`,confirmText:"Changelog",cancelText:"Not now",onConfirm:async ()=>{const e=await N.get("https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/MessageSpoofer/CHANGELOG.md");$.show({title:"Changelog",body:e.text,confirmText:"Update",cancelText:"Close",onConfirm:async ()=>{await me.openURL("https://github.com/spinfal/enmity-plugins/tree/master/MessageSpoofer/CHANGELOG.md")}})}})}catch(e){console.error("[BetterSearch Local Error \u2014 Issue when loading settings: "+e+"]")}window.enmity.modules.commands.addCommand({id:"spoofer",name:"spoofer",aliases:["s"],info:"Spoofer command",usage:"spoofer [options]",run:(e,t)=>{try{return t.toLowerCase()==="toggle"?(window.enmity.modules.settings.toggle(ue+"-enabled",!0),void $.show({title:"Message Spoofer",body:`Message Spoofer has been ${window.enmity.modules.settings.getBoolean(ue+"-enabled",!0)?"enabled":"disabled"}.`,confirmText:"Close"})):void($.show({title:"Message Spoofer",body:"Invalid subcommand. The subcommand must be `toggle`.",confirmText:"Close"}))}catch(e){console.error("[MessageSpoofer Local Error \u2014 Issue when executing command: "+e+"]")}}}),await oe(I),window.enmity.modules.settings.getSettingPanel("Message Spoofer",de,!0)}}ue(),window.enmity.plugins.registerPlugin(ue);```