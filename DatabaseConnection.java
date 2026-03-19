import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConnection {

    public static Connection connect(){

        try{

            Connection con = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/attendance_db",
            "root",
            "password");

            return con;

        }catch(Exception e){

            System.out.println(e);
            return null;

        }

    }

}