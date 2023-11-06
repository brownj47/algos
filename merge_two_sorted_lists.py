# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# ListNode{val: 1, next: ListNode{val: 2, next: ListNode{val: 4, next: None}}}
# ListNode{val: 1, next: ListNode{val: 3, next: ListNode{val: 4, next: None}}}
# return one sorted list


class Solution:
    def mergeTwoLists(self, list1, list2):
        dummy = ListNode()
        current = dummy
        #  go through list 1 and list 2, put the lower one on the end of holder
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                current = current.next
                list1 = list1.next

            else:
                current.next = list2
                current = current.next
                list2 = list2.next

        if list1:
            current.next = list1
        if list2:
            current.next = list2

        return dummy.next
