# React-JS
React Starter

Past code into link below:
https://codepen.io/sgrider/pen/yRWZEq

Dependencies:
Add React and ReactDOM libraries

Settings -> JavaScript Tab -> Under 'Add External Scripts/Pens' -> Search for 'React' and add the two libraries accordingly.


-------------------------------------
- React defines components and make them work together
- ReactDOM takes a component and render it in the DOM (HTML)

-------------------------------------
Install/Update NodeJS -> Install create-react-app -> Generate project -> Build project

1. cmd -> node -v
   
   if output == vXX.X.X, else nodejs.org/en/download -> install accordingly

2. npm install -g create-react-app

   dir -> mkdir <name> -> cd <dir-name>
   
   create-react-app <project-name>

   -g (global package install -> enable prg to be run on terminal)

   Alternate cmd: npx create-react-app <project-name>   (N.A for < npm v5.2)
  
3. React project behind the scenes lib : Webpack, Babel*, Dev server

   - ES5 -support all browser
   - ES2015 -almost all
   - ES2016-19 - poor support

   Babel(es201X[jsFile, jsFile]) -> returns es5J[jsFile, jsFile] -> load properly on almost any browser
   
   
4. Open the project in any editor (eg: atom/sublime/VS editor)

   project dir
   -----------
   folders
   - src -> written src code
   - public -> static files eg. imgs or static html
   - node_modules -> installed project dependencies
   - packages.json -> records proj dependencies and configurations
   -package-lock.json -> records exact version of installed packages
   - README.md -> how to use project instructions
   
5. Terminal -> cd <project dir/proj>
   - Start app: npm start
   - Stop app: Ctrl + c
   - localhost:3000
   
  -----------
Diff between 'import' and 'require' statement

Module system - set of rules on how code can be shared between js files

- ES2015 modules - > 'import'
- CommonJS modules - > 'require'

-----------

A component IS a 
 - Function or Class 
	- produce and show HTML TO user (JSX) 
	- handle feedback FROM user (Event handlers)

-----------
App-1

![](images/comp_rs_diagram1.PNG)

![](images/props.PNG)

![](images/comp_hier_2.PNG)

![](images/comments_mockup.PNG)

![](images/app_card.PNG)

-----------
semantic ui cdn:
- https://semantic-ui.com/
- https://cdnjs.com/libraries/semantic-ui

add in head tag:
- https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

https://github.com/marak/Faker.js/
npm install --save faker

-----------

![](images/class_state_seasons/func.PNG)
![](images/class_state_seasons/func_class.PNG)

![](images/class_state_seasons/func_class2.PNG)

![](images/class_state_seasons/class_benefits.PNG)

![](images/class_state_seasons/class_rules.PNG)

![](images/class_state_seasons/state_rules.PNG)

-----------
App-2

![](images/class_state_seasons/app_mockup.PNG)

![](images/class_state_seasons/app_challenges.PNG)

![](images/class_state_seasons/app_flow.PNG)

![](images/class_state_seasons/geoloc_api_link.PNG)

![](images/class_state_seasons/simple_app_lifecycle_flow.PNG)

![](images/class_state_seasons/simple_app_lifecycle_flow2.PNG)

![](images/class_state_seasons/conditional_rendering_logic.PNG)

![](images/class_state_seasons/season_logic.PNG)

![](images/class_state_seasons/comp_lifecycle_methods.PNG)

-----------
App-3

![](images/handleUserInputs_forms_events/handle_user_input_req_load_qns.PNG)

![](images/handleUserInputs_forms_events/api_search_req_mockup_v1.PNG)

![](images/handleUserInputs_forms_events/api_search_req_mockup_gridview_v2.PNG)

![](images/handleUserInputs_forms_events/App_challenges.PNG)

![](images/handleUserInputs_forms_events/api_search_req_comp_mockup.PNG)

![](images/handleUserInputs_forms_events/api_search_req_comp_flow1.PNG)

![](images/handleUserInputs_forms_events/event_methods.PNG)

![](images/handleUserInputs_forms_events/userInput_cbk_state_render_flow.PNG)

![](images/handleUserInputs_forms_events/control_vs_uncontrol_elements.PNG)

![](images/handleUserInputs_forms_events/using_react_state_vs_DOM_data_store_fetch.PNG)

![](images/handleUserInputs_forms_events/searchbar_comp_class.PNG)

![](images/handleUserInputs_forms_events/child_to_parent_data_cbk_flow.PNG)

![](images/apiReq/apiReq_diag.PNG)

![](images/apiReq/unsplash_api_url.PNG)

![](images/apiReq/apiReq_comp_diag.PNG)

![](images/apiReq/ajax_req_libs.PNG)

![](images/apiReq/img_req_flow.PNG)

![](images/pics_gridView_cssv2/gridView_diag.PNG)

![](images/pics_gridView_cssv2/imgCard_flow.PNG)

![](images/pics_gridView_cssv2/poc_app_view1.PNG)

![](images/pics_gridView_cssv2/poc_app_view2.PNG)

![](images/pics_gridView_cssv2/react_ref_DOM.PNG)


                                                                      
