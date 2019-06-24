
package gratinalfi.sparkstarter;

import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.staticFiles;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;

import spark.servlet.SparkApplication;



public class Application implements SparkApplication {

	public static void main(String[] args) {
		Application app = new Application();
		app.init();
	}
	
	public static String convertToJson(Object objectToConvert) {
		ObjectMapper mapper = new ObjectMapper();
		mapper.setDateFormat(new SimpleDateFormat("dd/MM/yyyy"));
		try {
			return mapper.writeValueAsString(objectToConvert);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	private static class Person {
		private String name;
		private int age;
		
		public Person(String name, int age) {
			super();
			this.name = name;
			this.age = age;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getAge() {
			return age;
		}

		public void setAge(int age) {
			this.age = age;
		}

	}

	@Override
	public void init() {
//		port(8080);
		staticFiles.location("/ui/dist");
		get("/hello", (req, res) -> "Hello World");
		get("/user", (req, res) -> {
			List<Person> people = Arrays.asList(new Person("Bill", 38), new Person("Ted", 40));
			return convertToJson(people);
		});
	}
}
