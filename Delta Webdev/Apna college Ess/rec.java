/**
 * rec
 */
public class rec {

    public static void rec(int n) {
        if (n > 10) {
            return;
        }
        System.out.println(n);
        rec(n + 1);
    }

    public static void main(String[] args) {
        rec(1);
    }
}