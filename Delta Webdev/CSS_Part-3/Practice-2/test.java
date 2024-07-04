
/**
 * test
 */
import java.util.*;

public class test {

    public static char find(String str) {

        Map<Character, Integer> charCountMap = new HashMap<>();

        // Count the frequency of each character in the string
        for (char c : str.toCharArray()) {
            charCountMap.put(c, charCountMap.getOrDefault(c, 0) + 1);
        }

        // Find the character with the maximum frequency
        char maxChar = ' ';
        int maxCount = 0;
        for (Map.Entry<Character, Integer> entry : charCountMap.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxChar = entry.getKey();
                maxCount = entry.getValue();
            }
        }

        return maxChar;
    }

    public static void main(String[] args) {
        String str = "aabbccaa";
        char abc = find(str);
        System.out.println(abc);
    }
}