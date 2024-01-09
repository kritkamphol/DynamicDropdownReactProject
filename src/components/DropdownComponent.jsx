const DropdownComponent=(props)=>{
    const {changeFoodData}=props  ///รับ props จากApp มาใช้งาน

    return (
      <nav>
        <h2>Dynamic Dropdown Component</h2>
        <select classname="menuy" onChange={changeFoodData}>
          <option value="เมนูทั้งหมด">เมนูทั้งหมด</option>
          <option value="ผัด-ทอด">ผัด-ทอด</option>
          <option value="แกง-ต้มยำ">แกง-ต้มยำ</option>
          <option value="เครื่องดื่ม">เครื่องดื่ม</option>
          <option value="สเต็ก">สเต็ก</option>
        </select>
      </nav>
    );
}
export default DropdownComponent