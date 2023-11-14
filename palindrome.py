class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned_string = ""
        for character in s:
            if character.isalnum():
                cleaned_string += character
        cleaned_string = cleaned_string.casefold()

        halfway_index = int(len(cleaned_string)/2)
        first_half_string = cleaned_string[:halfway_index]
        if len(cleaned_string) % 2 != 0:
            second_half_string = cleaned_string[(halfway_index + 1):]
        else:
            second_half_string = cleaned_string[(halfway_index):]

        i = 0
        rounds = len(second_half_string)
        while i < rounds:
            if first_half_string[-1] == second_half_string[i]:
                first_half_string = first_half_string[:-1]
                i += 1
            else:
                return False

        if len(first_half_string) > 0:
            return False
        return True
