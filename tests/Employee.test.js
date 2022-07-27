const Employee = require ('../employee')

test('Creates an Employee Class', ()=>{
        const obj = new Employee("charli", 1, "email@email.com")
        expect(typeof(obj)).toBe('object')
        expect(obj.getName()).toBe("charli")
        expect(obj.getId()).toBe(1)
        expect(obj.getEmail()).toBe("email@email.com")
        expect(obj.getRole()).toBe("Employee")
})
       
   
