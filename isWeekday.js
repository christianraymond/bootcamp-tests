function isWeekday(stringParam){
	if(stringParam.startsWith('S')){
       return false;
       }
     else{
       return true;
       }
};
 isWeekday('Saturday');
 isWeekday('Monday');
