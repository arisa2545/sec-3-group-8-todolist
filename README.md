# sec-3-group-8-todolist
# Application ToDoList
### ลักษณะของ application
เเอพพลิเคชั่นที่ช่วยจดบันทึกรายการที่ต้องทํา สำหรับ user ที่ต้องการจดไว้เพื่อกันตนเองลืม โดยที่ user สามารถจัดหมวดหมู่  เพิ่ม เเก้ไข รวมถึงลบ list ตามที่ต้องการได้ เเละยังสามารถเลือกติดดาวให้กับ list ที่มีความสำคัญได้ (important) 

### function ใน application
1. สามารถเพิ่มเเละลบหมวดหมู่ที่ต้องการได้ 
   *มีเลขเเสดงว่าในเเต่ละหมวดหมู่มีรายการที่ยังทําไม่เสร็จกี่รายการ รวมถึงมีการสรุปจำนวนรายการทั้งหมดเเละรายการที่เป็น important ด้วย
2. สามารถเพิ่มรายการที่ต้องทําได้โดย
   *กรอกชื่อ list
   *กรอกคําอธิบายของ list 
   *เลือกหมวดหมู่ของ list ที่ต้องการจัดเก็บ
   *สามารถกดที่รูปดาว เพื่อให้รายการนั้น อยู่ในหมวด important ได้ โดยที่ important เป็นหนึ่งในหมวดที่     มีมาให้ตั้งแต่แรกอยู่แล้ว
3. สามารถเลือกดูได้ว่าในเเต่ละหมวดหมู่มี list อะไรที่เราสร้างไว้อยู่บ้างโดย
    3.1 All category - หมวดที่จะแสดง list ทั้งหมด ของทุกหมวดหมู่ที่มีใน ToDoList
    3.2 Important - หมวดที่จะแสดงจะเเสดงเฉพาะ list ที่กดรูปดาวในหมวดหมู่นั้นๆ
4. List ที่เเสดง สิ่งที่เเสดงประกอบด้วย
   *ชื่อ list
   *คําอธิบายของ list 
   *Important ของ list
   *ถังขยะ(สามารถลบ list ออกไปได้)
5.สามารถติ๊กเพื่อบอกว่าทํา list นั้นสําเร็จไปเเล้วได้
   *เมื่อติ๊กเเล้วระบบจะขีดฆ่า list อันนั้นทิ้ง เเต่จะยังไม่ทําการลบออกไป ถ้าต้องการที่จะลบให้ทําการคลิกที่รูปถังขยะเพื่อลบ
6.สามารถเเก้ไข list ของเราได้(เพิ่มเข้ามาในการส่งงานครั้งนี้)
   *เเก้ไข ชื่อ list ได้
   *เเก้ไข คําอธิบายของ list ได้
   *เเก้ไขหมวดหมู่ของ list ที่ต้องการจัดเก็บได้
   *เเก้ไข Important ของ list ได้

### เเก้ไขจาก comment อาจารย์ครั้งที่เเล้ว
 *เปลี่ยน icon จากรูปดาวเป็นรูป Bookmark เเทน ในส่วนของ Important ของ list

### Router+View ใน application
 *มีทั้งหมด 3 path ด้วยกัน เเละมี view ทั้งหมด 3 view คือ Allcategory.vue ImportantList.vue เเละ ImportantList.vue