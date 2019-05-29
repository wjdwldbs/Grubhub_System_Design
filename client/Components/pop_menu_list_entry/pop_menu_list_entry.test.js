import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import PopMenuListEntry from "./pop_menu_list_entry";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";
import { isRegExp } from "util";

describe("testing Menu_item_modal component", () => {

    const fake_data = {
        _id: "5cedf5d3c5245d0004827037",
        photo_URL:
          "https://pixabay.com/get/54e4d4434f53b108f5d084609629357b1536dbe5504c704c70267bdd9f45c45c_640.jpg",
        restaurant_id: 1,
        item_name: "Creamy Baked Risotto",
        description:
          "Beef koobide comes inside of baguette bread filled with our special sauce with lettuce, white and red cabbage and tomato.",
        price: 8,
        popular: true,
        special_instruction: true,
        extras: [
          {
            _id: "5cedf5d3c5245d000482703a",
            name: "fries",
            price: 2
          },
          {
            _id: "5cedf5d3c5245d0004827039",
            name: "fries",
            price: 2
          },
          {
            _id: "5cedf5d3c5245d0004827038",
            name: "coke",
            price: 1
          }
        ],
        __v: 0
      };

    it("should return a single-node wrapper.", () => {
      expect(shallow(<PopMenuListEntry data = {fake_data} />).length).toEqual(1);
    });
    
    it("should toggle Modal", ()=>{
        let wrapper = shallow(<PopMenuListEntry data = {fake_data}/>);
        wrapper.instance().toggleModal();
        expect(wrapper.instance().state.showModal).toBeTruthy();
    })

})