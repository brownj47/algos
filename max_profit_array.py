# class Solution:
#     def maxProfit(self, prices: list[int]) -> int:
#         # start at the beginning
#         max_profit = 0
#         i = 0
#         recent_global_min_price = float('inf')
#         while i < len(prices):
#             start_price = prices[i]

#             if start_price > recent_global_min_price:
#                 i += 1
#                 continue

#             if start_price < recent_global_min_price:
#                 recent_global_min_price = start_price

#             j = i+1
#             while j < len(prices):
#                 sell_price = prices[j]
#                 profit = sell_price - start_price
#                 if profit > max_profit:
#                     max_profit = profit
#                 j += 1

#             i += 1
#         return max_profit


# my_solution = Solution()
# my_solution.maxProfit([7, 1, 5, 3, 6, 4])
# Works but is too slow


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        # start at the beginning
        max_profit = 0
        left = 0
        right = 1

        while right < len(prices):
            if prices[right] > prices[left]:
                print(prices[right]-prices[left])
                current_profit = prices[right]-prices[left]
                if current_profit > max_profit:
                    max_profit = current_profit

            else:
                left = right
            right += 1

        return max_profit


my_solution = Solution()
my_solution.maxProfit([7, 1, 5, 3, 6, 4])
