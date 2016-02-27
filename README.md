# ASPC-2016 Danger Room How-to

### What does the solution do
The main solutions is the Danger Room. The Danger Room is created to provide situational awareness for our heroes and help them carry out Operations (e.g. killing villains, saving the world ++). There are three main artefacts
* Danger Room Frontpage: Map of all operations, Features heroes and some KPI's for the heroes
* Hero Page: Provides key information about the heroes
* Operation rooms: This is where the collaboration and reporting happens

### Overview of repository
* Deploy: Pre and Post-scripts, dynamically retrieved by the script
* Resources: Files used during provisioning of Operation Rooms
* SiteAssets: Typescript, LESS, images etc. for the Danger Room Solution
* SitePages: Pages to be provisioned
* SiteTemplates: The template for the Operation rooms - built with js-sites-core, a JavaScript driven templating engine
* Theme: The composed look for the site
* misc: Tools not in the core solution. Datamining tool to get Marvel data and Office Add-in.
* typings: Typings for TypeScript
* build.ps1: Main build and deployment script

### Development guidelines
CSS and JavaScript files are forbidden, and will be deleted after deployment. You should write LESS and TypeScript 

### Dependencies
* npm
* bower
* tsd 
* lessc
* TypeScript
* OfficePnP PowerShell

### Install the solution
* After you've gotten the latest from Git, you only have to run build.ps1
* Run build.ps1 which will do the following
** Get bower packages
** Run Pre-Build scripts
** Build LESS files
** Build TypeScript files
** Provision the template
** Run Post-Build scripts
** Delete all JavaScript and CSS files

### Maintainers
* Gissur
* Kim
* Ole Martin
* Ole Kristian
* Tarjei