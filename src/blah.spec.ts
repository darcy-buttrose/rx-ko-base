import {expect} from "chai";

describe('Map', () => {
    it('is in order', () => {
        let m = new Map<string,string>();
        let init:Array<{key:string;value:string}> = [
            {key:"z",value:"first"},
            {key:"a",value:"second"}
        ]
        
        init.sort((a,b) => {return (a.key < b.key)?-1:+1;}).forEach((value) => {
            m.set(value.key,value.value);
        })
        
        let a:string[] = [];
        
        m.forEach((x) => {
            console.log('-- ' + x + ' --');
            a = a.concat([x]);
        });
        
        expect(a[0]).to.equal("second");
        expect(a[1]).to.equal("first");
    });
});