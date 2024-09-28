#include <stdlib.h>
#include <stdio.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
	for (size_t i = 0; i < numsSize; i++)
	{
		for (size_t j = i + 1; j < numsSize; j++)
		{
			if (nums[i] + nums[j] == target)
			{
				int *res = malloc(2 * sizeof(int));
				if (!res) return NULL;
				res[0] = i;
				res[1] = j;
				*returnSize = 2;
				return res;
			}
		}
	}
	*returnSize = 0;
	return NULL;
}

// int main(void) {
// 	int num[] = {1, 2, 3, 4};
// 	int target = 3;
// 	int numS = 4;
// 	int retS;
// 	int * res = twoSum(num, numS, target, &retS);
// 	printf("%d, %d\n", res[0], res[1]);
// }