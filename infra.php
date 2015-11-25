<?php
namespace infrajs\activelink;
global $infra;
infra_when($infra,'onjs',function(){
	global $infra;
	$infra['js'] .= $infra['require']('*activelink/activelink.js');
    $infra['js'] .= $infra['require']('*activelink/infra.js');
});
