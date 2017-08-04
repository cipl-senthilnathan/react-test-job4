import { observable, action,computed,mobx,autorun,extendObservable } from 'mobx';


class categoryStore {
  //Instead of hardcoding call API to fetch the values
  @observable values = [{
  name: "onion",
  status: "Active",
  id: 1
}, {
  name: "pepper",
  status: "Inactive",
  id: 2
}, {
  name: "broccoli",
  status: "Active",
  id: 3
}];
  constructor(){
    autorun(()=>console.log(this.report));
  }

  @action setId(id) {
    this.values.id = id;
  }

  @action setName(name) {
    this.values.name = name;
  }

  @action setStatus(status) {
    this.values.status = status;
  }

  @action reset() {
    this.values.id = '';
    this.values.name = '';
    this.values.status = '';
  }
  @action save() {
    console.log("Inside sav method");
    console.log("value.Id::", this.values.id);
    console.log("value.Id::", this.values.name);
    console.log("value.Id::", this.values.status);
    //call API to save here
    console.log("Category added successfully");
  }
  @action update() {
    console.log("Inside sav method");
    console.log("value.Id::", this.values.id);
    console.log("value.Id::", this.values.name);
    console.log("value.Id::", this.values.status);
    //Call API to save here
    console.log("Category update successfully");
  }
  @action deleteCategory(slug) {
    //Call API to delete here
    console.log("id::",slug );
  }

  @action category(id){
    let value;
    for (var i = 0; i < this.values.length; i++) {
      if(this.values[i].id==id)
      {
        console.log("name ",this.values[i].name);
        console.log("name ",this.values[i].status);
        this.value=this.values[i]
      }
    }
    return this.value;
  }

  @computed get fullName(){
    return this.values;
  }

  @computed get report() {
    if (this.values.length === 0)
			return "<none>";
		return  this.values;
	}
}

export default new categoryStore();
