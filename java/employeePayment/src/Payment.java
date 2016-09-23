
public class Payment {

	public static void main(String[] args) {
//		create person obj
		Person person = new Person();
		person.setFirstName("Emily");
		person.setLastName("Rodriguez");
		person.setHourlyRate(23);
		
//		print state of person obj
		System.out.println(person.toString());
//		get and print payment
		System.out.println(person.getPayment(40));
		
	}

}
