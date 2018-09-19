import * as types from './mutation-types'

export const setcurTitleActions = function({commit,state},curTitle){
	// 异步提交mutation
	const saveTitle = state.curTitle
	if(Math.random()>0.5){
		setTimeout(()=>{
			commit(types.setcurTitle,curTitle)
		},1000)
	}else{
		setTimeout(()=>{
			commit(types.setcurTitle,saveTitle)
		},1000)
	}
	
}
