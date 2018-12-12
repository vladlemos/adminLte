// export const adminLteConf = {
//   skin: 'blue',
//   // isSidebarLeftCollapsed: false,
//   // isSidebarLeftExpandOnOver: false,
//   // isSidebarLeftMouseOver: false,
//   // isSidebarLeftMini: true,
//   // sidebarRightSkin: 'dark',
//   // isSidebarRightCollapsed: true,
//   // isSidebarRightOverContent: true,
//   // layout: 'normal',
//   sidebarLeftMenu: [
//     {label: 'ESTEIRA COMEX', separator: true},
//     {label: 'Get Started', route: '/', iconClasses: 'fa fa-home', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
//     {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
//         {label: 'Configuration', route: 'layout/configuration'},
//         {label: 'Custom', route: 'layout/custom'},
//         {label: 'Header', route: 'layout/header'},
//         {label: 'Sidebar Left', route: 'layout/sidebar-left'},
//         {label: 'Sidebar Right', route: 'layout/sidebar-right'},
//         {label: 'Content', route: 'layout/content'}
//       ]},
//     {label: 'COMPONENTS', separator: true},
//     {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
//     {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
//     {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
//         {label: 'Default Box', route: 'boxs/box'},
//         {label: 'Info Box', route: 'boxs/info-box'},
//         {label: 'Small Box', route: 'boxs/small-box'}
//       ]},
//       {label: 'TESTE DE SER FELIZ', separator: true},
//     {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
//     {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
//     {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
//         {label: 'Default Box', route: 'boxs/box'},
//         {label: 'Info Box', route: 'boxs/info-box'},
//         {label: 'Small Box', route: 'boxs/small-box'}
//       ]},
//     {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
//     {label: 'Form', iconClasses: 'fa fa-files-o', children: [
//         {label: 'Input Text', route: 'form/input-text'}
//     ]},
//     {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
//   ]
// };

export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'ESTEIRA COMEX - CEOPC/GEOPC', separator: true},
    {label: 'Introdução', route: '/', iconClasses: 'fa fa-home'},
    {label: 'Solicitações', iconClasses: 'fa fa-sign-in', children: [
        {label: 'Liquidação de ACC/ACE', route: 'layout/configuration'},
        {label: 'Operações Antecipadas', route: 'layout/custom'},
        {label: 'Atualiza E-mail - Cliente Comex', route: 'layout/header'}
    ]},

    {label: 'Acompanhamentos', iconClasses: 'fa fa-files-o', children: [
        {label: 'ACC/ACE', route: 'layout/configuration'},
        {label: 'Liquidadas', route: 'layout/custom'},
        {label: 'Middle Office', route: 'layout/custom'},
        {label: 'Operações Antecipadas', route: 'layout/header'}
    ]},

    {label: 'Controles', iconClasses: 'fa fa-gear', children: [
        {label: 'Envio de Ordens', route: 'layout/configuration'}
    ]},

    {label: 'Gerencial', iconClasses: 'fa fa-television', children: [
        {label: 'Distribuição', route: 'layout/configuration'},
        {label: 'Esteira de Liquidações', route: 'layout/custom'},
        {label: 'GECAM', route: 'layout/custom'},
        {label: 'GELIT', route: 'layout/custom'},
        {label: 'Painel ACC/ACE', route: 'layout/header'}
    ]},
    
    {label: 'Indicadores', iconClasses: 'fa fa-bar-chart', children: [
        {label: 'Antecipados', route: 'layout/configuration'},
        {label: 'Liquidação ACC/ACE', route: 'layout/custom'},
        {label: 'Middle-Office', route: 'layout/custom'},
        {label: 'Realize', route: 'layout/header'}
    ]},
  

    {label: 'Administrador', iconClasses: 'fa fa-th-list', children: [
        {label: 'Acessos', route: 'layout/header'}
    ]},

    {label: 'DOCUMENTOS', separator: true},

    {label: 'Manual do Usuário', route: 'cartilha.pdf', iconClasses: 'fa fa-download text-orange'},
    {label: 'Autorização e-mail COMEX', route: 'tabs', iconClasses: 'fa fa-download text-orange'},
  ]
};