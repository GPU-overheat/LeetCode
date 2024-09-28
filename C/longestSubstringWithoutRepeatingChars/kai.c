#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char *s) {
    int n = strlen(s);
    int charIndex[128] = {0};
    int maxLength = 0, move = 0;

    for (int win = 0; win < n; win++) {
        if (charIndex[s[win]] > move) {
            move = charIndex[s[win]];
        }
        charIndex[s[win]] = win + 1;
        maxLength = (maxLength > (win - move + 1)) ? maxLength : (win - move + 1);
    }

    return maxLength;
}
