!function(k){function e(a){return a.replace(n,"\\$&")}function f(a){this.init(this.template=a)}var p={"":",","+":",","#":",","?":"&"},n=/[.*+?^=!:${}()|\[\]\/\\]/g,q=new RegExp(/\{([+#.\/;?&]?)((?:[\w%.]+(\*|:\d)?,?)+)\}/g.source+"|.[^{]*?","g");f.prototype={init:function(a){var l=0,b="",f={};a="^"+a.replace(q,function(a,h,m){if(!m)return e(a);var c=p[h]||h,k=";"==c||"&"==c;a="(.+?)";b+='sep="'+c+'";';a=m.split(",").map(function(a){var d;a=a.replace(/(?:(\*)|:(\d+))$/,function(a,b,c){d=c;return""});
var g="(.*?)";l++;if(d)g="((?:%..|.){1,"+d+"})",f[a]={pos:l,len:d};else if(d=f[a])g="(\\"+d.pos+".*?)";b+="t=(parts["+l+"]||'').split('"+c+"');";b+='out["'+a+'"]=t.length>1?t.map(decodeURIComponent):decodeURIComponent(t[0]);';return k?"&"==c?e(a+"=")+g:e(a)+"(?:="+g+")?":g}).join(e(c));return("+"!=h?e(h):"")+a})+"$";this.re=new RegExp(a);this.fn=new Function("parts","var t,sep,eq,out={};"+b+";return out")},match:function(a){return(a=this.re.exec(a))&&this.fn(a)}};k.Template=f}(this.URI||(this.URI=
{}));