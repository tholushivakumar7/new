public class AttendancePredictor {

    public static String predict(int attended,int total){

        double percentage = ((double)attended/total)*100;

        int required = 75;

        double requiredClasses = (required/100.0)*total;

        String result="Attendance = "+percentage+"%\n";

        if(percentage>=required){

            int bunk=(int)(attended-requiredClasses);

            result+="You can bunk "+bunk+" classes";

        }
        else{

            int need=(int)Math.ceil(requiredClasses-attended);

            result+="You must attend "+need+" classes";

        }

        return result;

    }

}