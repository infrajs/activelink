<?php
namespace infrajs\activelink;
use infrajs\event\Event;
use infrajs\view\View;

Event::wheng('onjs', function () {
	View::js('*activelink/activelink.js');
	View::js('*activelink/infra.js');
});
