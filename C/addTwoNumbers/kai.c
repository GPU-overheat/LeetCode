#include <stdlib.h>
#include <stdio.h>

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode
{
	int val;
	struct ListNode *next;
};

struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2)
{
	struct ListNode *head = malloc(sizeof(struct ListNode));
	if (!head)
		return NULL;
	struct ListNode *curr = head;
	int carry = 0;

	while (l1 != NULL || l2 != NULL || carry)
	{
		int sum = carry;

		if (l1 != NULL)
		{
			sum += l1->val;
			l1 = l1->next;
		}

		if (l2 != NULL)
		{
			sum += l2->val;
			l2 = l2->next;
		}
		carry = sum / 10;
		curr->next = malloc(sizeof(struct ListNode));
		curr->next->val = sum % 10;
		curr = curr->next;
	}
	curr->next = NULL;
	struct ListNode *result = head->next;
	free(head);
	return result;
}