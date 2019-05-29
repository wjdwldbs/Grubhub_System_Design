import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import MenuItemModal from "./menu_item_modal";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

describe("testing Menu_item_modal component", () => {
  it("should return a single-node wrapper.", () => {
    expect(shallow(<MenuItemModal />).length).toEqual(1);
  });

  it("test everything else", () => {
    // const fake_Data = []
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
    let wrapper = shallow(<MenuItemModal data = {fake_data} open={true} />);
    expect(wrapper.find("#quantityTitle").text()).toEqual("Quantity");
    expect(wrapper.instance().state.quantity).toEqual(0);
    expect(wrapper.instance().props.data).toEqual(fake_data)
    wrapper.instance().quantityAdd();
    expect(wrapper.instance().state.quantity).toEqual(1);
    wrapper.find('#addTest').simulate('click');
    expect(wrapper.instance().state.quantity).toEqual(2);
    wrapper.instance().quantityMinus();
    expect(wrapper.instance().state.quantity).toEqual(1);
    wrapper.instance().extraAdd(true, 10);
    expect(wrapper.instance().state.extraFee).toEqual(10);
    wrapper.find('#checkboxTest1').simulate('change', {target: {checked: true}})
    expect(wrapper.instance().state.extraFee).toEqual(12);
  });
});
