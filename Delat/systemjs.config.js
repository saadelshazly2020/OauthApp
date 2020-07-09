/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
         meta: {
            'typescript': {
                "exports": "ts"
             },
            'node_modules/tinymce/plugins/advlist/plugin.js': { format: 'global' },
            'node_modules/tinymce/plugins/autoresize/plugin.js': { format: 'global' },
            'node_modules/tinymce/plugins/code/plugin.js': { format: 'global' },
            'node_modules/tinymce/plugins/link/plugin.js': { format: 'global' },
            'node_modules/tinymce/plugins/lists/plugin.js': { format: 'global' },
            'node_modules/tinymce/plugins/paste/plugin.js': { format: 'global' },
            'node_modules/tinymce/plugins/table/plugin.js': { format: 'global' },
            'node_modules/tinymce/themes/modern/theme.js': { format: 'global' }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'angular2-datatable': 'node_modules/angular2-datatable',
            'lodash': 'npm:lodash/lodash.js',
            'ng2-bs3-modal': 'npm:/ng2-bs3-modal',
            'mydatepicker': 'npm:mydatepicker/bundles/mydatepicker.umd.min.js',
            'ng2-table': 'node_modules/ng2-table',
            'ng2-toasty': 'node_modules/ng2-toasty/bundles/index.umd.js',
            //'angular-froala-wysiwyg': 'npm:angular-froala-wysiwyg/bundles/angular-froala-wysiwyg.umd.js',
            'angular2-tinymce': 'node_modules/angular2-tinymce/dist',
            'tinymce': 'node_modules/tinymce'
           
           
            //,
            //'angular2-notifications': 'node_modules/angular2-notifications'
            //'angular2-busy': 'npm:angular2-busy'
            //'ng2-bootstrap': 'npm:ng2-bootstrap/bundles'
            //'moment': 'node_modules/moment/moment.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: 'main.js', defaultExtension: 'js'
            },
            'app/translate': {
                main: 'index.js',
                defaultExtension: 'js'
            }
            ,
            rxjs: {
                defaultExtension: 'js'
            }
            ,
            'ng2-bs3-modal':
            { main: '/bundles/ng2-bs3-modal.js', defaultExtension: 'js' },
            'angular2-datatable': { main: 'index.js', defaultExtension: 'js' },
            'lodash': { defaultExtension: 'js' },
            'ng2-table': { defaultExtension: 'js' },
          
            
            'ng2-toasty': { defaultExtension: 'js' },
            'angular2-tinymce': { main: 'index.js', defaultExtension: 'js' },
            'tinymce': { defaultExtension: 'js' }
           
            
          
        }
    });
})(this);